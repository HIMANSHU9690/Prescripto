// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connnectDB from './config/mongodb.js'
// import connectCloudinary from './config/cloudinary.js'
// import adminRouter from './routes/adminRoute.js'
// import doctorRouter from './routes/doctorRoute.js'
// import userRouter from './routes/userRoute.js'



// //app config
// const app=express()
// const port=process.env.PORT || 4000
// connnectDB()
// connectCloudinary()

// //middlewares
// app.use(express.json())
// app.use(cors())

// //api endpoints
// app.use('/api/admin',adminRouter)
// app.use('/api/doctor',doctorRouter)
// app.use('/api/user',userRouter)
// //localost :4000/api/admin

// app.get('/',(req,res)=>{

//     res.send('API WORKING CORRECTLY')
// })

// app.listen(port,()=>console.log("Server started on",port))


import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connnectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// App config
const app = express()

// Connect DB and Cloudinary
connnectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())

// API endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

// Test route
app.get('/', (req, res) => {
  res.send('API WORKING CORRECTLY')
})

// Export the app (for serverless functions)
export default app
