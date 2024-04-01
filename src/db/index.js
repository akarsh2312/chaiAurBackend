import mongoose from "mongoose";
import db_name from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB error",error)
        // throw error
        process.exit(1)
    }
}
export default connectDB
// import express from express
// const server=express()
//start with semicolon for immediately executed funciton
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
// AFTER DB CONNECTION LISTENT THE SERVER
//         server.on("error",(error)=>{
//             console.log("express error",error)
//             throw error
//         })
        // server.listen(process.env.PORT,()=>{
        //     console.log(`Server is listening on port ${process.env.port}`);
        // })
//     } catch (error) {
//         console.log("MONGODB error",error)
//         throw error
//     }
// })()
