import express from 'express';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js';
import userModel from '../models/userModel.js';



const app = express();

// Configure multer for file upload, specifying storage location
const upload = multer({ dest: 'uploads/' });

// Cloudinary configuration (ensure these are set up in your environment)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// API for adding a doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, speciality, degree, experience, about, fees, address, password } = req.body;
        const imageFile = req.file;

        // Check if required fields are present
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing details" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Validate strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Check if an image file is uploaded
        if (!imageFile) {
            return res.json({ success: false, message: "Image file is required" });
        }

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        // Construct doctor data
        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address), // Ensure address is a JSON string in request
            date: Date.now(),
        };

        // Save new doctor to database
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({ success: true, message: "Doctor added" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

     
 





// Route to handle the addDoctor function, using multer middleware for file upload
app.post('/add-doctor', upload.single('image'), addDoctor);

//API for admin login
const loginAdmin=async(req,res)=>{
    try {
        const {email,password}=req.body

        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
           
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({sucess:true,token})

        }else{
            res.json({sucess:false,message:"Invalid credentials"})
        }


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//API to get all doctors list for admin panel

const allDoctors=async (req,res)=>{
    try {
        const doctors=await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//API to get all appointments

const appointmentsAdmin = async (req,res)=>{


      try {
        const appointments=await appointmentModel.find({})
        res.json({success:true,appointments})

        
      } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
        
      }
}

//API to for cancel appointment for admin panel

const listAppointment = async (req, res) => {
    try {
      const { userId } = req.body; // userId should be passed in the body by the authUser middleware
      const appointments = await appointmentModel.find({ userId });
  
      if (appointments.length === 0) {
        return res.json({ success: false, message: 'No appointments found' });
      }
  
      res.json({ success: true, appointments });
    } catch (err) { // Use `err` as the variable name for error handling
      console.log(err); // Log the error to console for debugging
      res.json({ success: false, message: err.message }); // Send the error message as the response
    }
  };
 
 
  //API to cancel appointment
 
  const appointmentCancel=async(req,res)=>{
        try {
          const {appointmentId}=req.body
 
          const appointmentData =await appointmentModel.findById(appointmentId)
            
          
 
          await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})
 
          //releasing doctor slot
 
          const{docId,slotDate,slotTime}= appointmentData
 
          const doctorData =await doctorModel.findById(docId)
 
          let slots_booked=doctorData.slots_booked
          slots_booked[slotDate]=slots_booked[slotDate].filter(e=> e !== slotTime)
          await doctorModel.findByIdAndUpdate(docId,{slots_booked})
          res.json({success:true,message:"Appointment Cancelled"})
          
        } catch (error) {
          console.log(error); // Log the error to console for debugging
          res.json({ success: false, message: error.message });
          
        }
 
  }

  //API to get dashboard data for admin panel


  const adminDashboard=async(req,res)=>{

            try {

                const doctors=await doctorModel.find({})
                const users=await userModel.find({})
                const appointments= await appointmentModel.find({})

                const dashData={
                     
                    doctors:doctors.length,
                    appointments:appointments.length,
                    patients:users.length,
                    latestAppointments:appointments.reverse().slice(0,5)

                }
           
                res.json({success:true,dashData})

                
            } catch (error) {
                console.log(error); // Log the error to console for debugging
                res.json({ success: false, message: error.message,adminDashboard });
                
            }

  }




export { addDoctor ,loginAdmin,allDoctors,appointmentsAdmin,appointmentCancel,adminDashboard };
export default addDoctor;
