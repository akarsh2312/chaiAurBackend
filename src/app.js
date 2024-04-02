import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
// to accept data in json format
//phle body parser bhi use krna pdta tha to access form inputs but ab express k new version m need nhi h
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// to accept data from url which is present in encoded form

app.use(express.static("public"))
// to store some files or images in public folder whcih have static access

app.use(cookieParser())
// to read and create browser cookies
export {app}