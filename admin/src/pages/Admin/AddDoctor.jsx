

// import React, { useContext } from 'react'
// import { assets } from '../../assets/assets'
// import { useState } from 'react'
// import { AdminContext } from '../../context/AdminContext'
// import {toast} from 'react-toastify'
// import axios from 'axios'

// const AddDoctor = () => {

//   const [docImg, setDocImg] = useState(false)
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [experience, setExperience] = useState('1 Year')
//   const [fees, setFees] = useState('')
//   const [about, setAbout] = useState('')
//   const [speciality, setSpeciality] = useState('Genral physcian')
//   const [degree, setDegree] = useState('')
//   const [address1, setAddress1] = useState('')
//   const [address2, setAddress2] = useState('')

//   const {backendUrl,aToken}= useContext(AdminContext)

//   const  onSubmitHandler=async (event)=>{
//     event.preventDefault()

//     try {

//       if(!docImg){
//         return toast.error('Image Not selected')
//       }
//  const formData = new FormData()

// formData.append('image', docImg)
// formData.append('name', name)
// formData.append('email', email)
// formData.append('password', password)
// formData.append('experience', experience)
// formData.append('fees', Number(fees))
// formData.append('about',about)
// formData.append('speciality', speciality)
// formData.append('degree', degree)
// formData.append('address', JSON.stringify({line1:address1, line2:address2}))


// //console log form data
// formData.forEach((value,key)=>{
//   console.log(`${key} : ${value}`);
  
// }) 

// //API call for backend 
// const {data}=await axios.post(backendUrl +'/api/admin/add-doctor',formData,{headers:{aToken}})

//  if(data.success){
//   toast.success(data.message)
//   setDocImg(false)
//   setName('')
//   setPassword('')
//   setEmail('')
//   setAddress1('')
//   setAddress2('')
//   setDegree('')
//   setAbout('')
//   setFees('')

//  }else{
//   toast.error(data.message)
//  }
      
//     } catch (error) {
//        toast.error(error)
//        console.log(error)
//     }
//   }



//   return (
//     <form  onSubmit={onSubmitHandler} className='m-5 w-full'>
//       <p className='mb-3 text-lg font-medium'>Add Doctor</p>

//       <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        
//         <div className='flex items-center gap-4 mb-8 text-gray-500'>
//           <label htmlFor="doc-img">
//             <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={ docImg ? URL.createObjectURL(docImg) :assets.upload_area} alt="" />
//           </label>
//           <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id='doc-img' hidden />
//           <p>Upload doctor <br /> picture</p>
//         </div>

//         <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          
//           <div className='w-full lg:flex-1 flex flex-col gap-4'>
//             <div className='flex-1 flex flex-col gap-1'>
//               <p>Doctor name</p>
//               <input  onChange={(e)=>setName(e.target.value)} value={name} type="text" className='border rounded px-3 py-2' placeholder='Enter your name' required />
//             </div>

//             <div className='flex-1 flex flex-col gap-1'>
//               <p>Doctor email</p>
//               <input  onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='border rounded px-3 py-2' placeholder='Enter your email' required />
//             </div>

//             <div className='flex-1 flex flex-col gap-1'>
//               <p>Doctor password</p>
//               <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='border rounded px-3 py-2' placeholder='Enter your password' required />
//             </div>

//             <div className='flex-1 flex flex-col gap-1'>
//               <p>Experience</p>
//               <select onChange={(e)=>setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2'>
//                 <option value="1 Year">1 Year</option>
//                 <option value="2 Year">2 Year</option>
//                 <option value="3 Year">3 Year</option>
//                 <option value="4 Year">4 Year</option>
//                 <option value="5 Year">5 Year</option>
//                 <option value="6 Year">6 Year</option>
//                 <option value="7 Year">7 Year</option>
//                 <option value="8 Year">8 Year</option>
//                 <option value="9 Year">9 Year</option>
//                 <option value="10 Year">10 Year</option>
//               </select>
//             </div>

//             <div className='flex-1 flex flex-col gap-1'>
//               <p>Fees</p>
//               <input  onChange={(e)=>setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='fees' required />
//             </div>
//           </div>

//           <div className='w-full lg:flex-1 flex flex-col gap-4'>
//             <div className='flex-1 flex flex-col gap-1'>
//               <p>Speciality</p>
//               <select  onChange={(e)=>setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2'>
//                 <option value="General physician">General physician</option>
//                 <option value="Gynecologist">Gynecologist</option>
//                 <option value="Dermatologist">Dermatologist</option>
//                 <option value="Pediatricians">Pediatricians</option>
//                 <option value="Neurologist">Neurologist</option>
//                 <option value="Gastroenterologist">Gastroenterologist</option>
//               </select>
//             </div>

//             <div className='flex-1 flex flex-col gap-1'>
//               <p>Education</p>
//               <input onChange={(e)=>setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Education' required />
//             </div>

//             <div className='flex-1 flex flex-col gap-1'>
//               <p>Address</p>
//               <input onChange={(e)=>setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='address 1' required />
//               <input onChange={(e)=>setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='address 2' required />
//             </div>
//           </div>

//         </div>

//         <div>
//           <p className='mt-4 mb-2'>About doctor</p>
//           <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className='w-full border rounded' type="text" placeholder='write about doctor' rows={5} required />
//         </div>

//         <button type='submit' className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>Add doctor</button>
//       </div>
//     </form>
//   )
// }

// export default AddDoctor










import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image not selected");
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ street, city, state, zipCode })
      );

      // Debug FormData
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      // API call for backend
      const { data } = await axios.post(backendUrl + "/api/admin/add-doctor", formData, {
        headers: { aToken, "Content-Type": "multipart/form-data" },
      });

      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setPassword("");
        setEmail("");
        setStreet("");
        setCity("");
        setState("");
        setZipCode("");
        setDegree("");
        setAbout("");
        setFees("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p>Upload doctor picture</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="border rounded px-3 py-2"
                placeholder="Enter doctor name"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="border rounded px-3 py-2"
                placeholder="Enter doctor email"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="border rounded px-3 py-2"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border rounded px-3 py-2"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={`${i + 1} Year`}>
                    {i + 1} Year
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border rounded px-3 py-2"
                type="number"
                placeholder="Fees"
                required
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border rounded px-3 py-2"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Education"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Street"
                required
              />
              <input
                onChange={(e) => setCity(e.target.value)}
                value={city}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="City"
                required
              />
              <input
                onChange={(e) => setState(e.target.value)}
                value={state}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="State"
                required
              />
              <input
                onChange={(e) => setZipCode(e.target.value)}
                value={zipCode}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Zip Code"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full border rounded"
            type="text"
            placeholder="Write about doctor"
            rows={5}
            required
          />
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Add doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
