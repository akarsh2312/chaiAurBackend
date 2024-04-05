import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema=new mongoose.Schema({
    videoFile:{
        type:String,//cloudinary url
        required:true
    },
    thumbnail:{
        type:String,//cloudinary url
        required:true
    },
    title:{
        required:true
    },
    description:{
        type:String,
        type:String,
        required:true
    },
    duration:{
        type:Number,
        //clodinary data dega video file k baare m vhi s nikalenge duration
        required:true
    },
    views:{
        type:Number,
        default:0,
    },
    isPublished:{
        type:Boolean,
        default:true,
    },
    owner:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",videoSchema)