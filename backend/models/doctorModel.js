// import mongoose from "mongoose";

// const doctorSchema=new mongoose.Schema({
//     name:{type:String ,required:true},
//     email:{type:String ,required:true,unique:true},
//     password:{type:String ,required:true},
//     image:{type:String ,required:true},
//     speciality:{type:String ,required:true},
//     degree:{type:String ,required:true},
//     experience:{type:String ,required:true},
//     about:{type:String ,required:true},
//     available:{type:Boolean ,default:true},
//     fees:{type:Number ,required:true},
//     address:{type:Object ,required:true},
//     date:{type:Number ,required:true},
//     slots_booked:{type:Object ,default:{}},
// },{minimize:false})

// const doctorModel=mongoose.models.doctor || mongoose.model('doctor',doctorSchema)

// export default doctorModel

import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true }
    },
   
    date: { type: Date, required: true },
    slots_booked: { type: Map, of: String, default: {} }
}, { minimize: false });

let doctorModel;
try {
    doctorModel = mongoose.model('doctor');
} catch {
    doctorModel = mongoose.model('doctor', doctorSchema);
}

export default doctorModel;
