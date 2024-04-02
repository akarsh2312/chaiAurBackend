import connectDB from "./db/index.js";
import dotenv from "dotenv"
import {app} from './app.js'
//sbse phle index file dotenv ka acces lo then connectDb call kro
dotenv.config({
    path:'./.env'
})
connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log(err);
    })
    app.listen(process.env.PORT,()=>{
            console.log(`Server is listening on port ${process.env.port}`);
        })
}).catch((err)=>{
    console.log("MongoDB connection falied",err);
})





