const asyncHandler=(fn)=>async(req,res,next)=>{
    try {
      await fn(req,res,next)  
    } catch (error) {
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
} 
//async Handler is a wraaper highorder function which takes fn as an input and also output funtion. It is basically design to handle async function to handle the repeated use of try catch in it.
export {asyncHandler}

