const User=require("../models/user.model.js");
const ApiError=require("../utils/ApiError.js");
const asyncHandler=require("../utils/asyncHandler.js");
const jwt=require("jsonwebtoken");

const verifyJWT=asyncHandler(async(req,res,next)=>{
    const token= req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
    if(!token){
        throw new ApiError(401,"Unauthorized request");
    }
    const decodedToken=jwt.verify(token,ACCESS_TOKEN_SECRET);
    

})