// import mongoose  from  'mongoose';

// const connnectDB =async()=>{
//     mongoose.connection.on('connected',()=>console.log(" Database connected"))
//     await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
// }

// export default connnectDB

import mongoose from 'mongoose';

const connnectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("Database connected");
    });

    // MongoDB URI
    const mongoURI = `${process.env.MONGODB_URI}prescripto`; // appending the database name to the URI
    await mongoose.connect(mongoURI); // No need for deprecated options
};

export default connnectDB;
