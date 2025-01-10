import User from "../model/user.model.js";
import bcrypt from 'bcryptjs '
import jwt from 'jsonwebtoken' ;

export const checkPassword=async(req,res)=>{
    try {
        const {password,userId}=req.body;
        const user =await User.findById(userId);
        const isValid=await bcrypt.compare(password,user.password); 
        if(!isValid)
        {
            return res.status(400).json({
                message:"Invalid Password",
                error:true
            })
        }
        // create token for data
        const tokennData={
            id:user._id,
            email:user.email
        }

        const token =await jwt.sign(tokennData,process.env.JWT_SECREATE_KEY,{expiresIn:'1d'})
        const cookeOptions={
            http:true,
            secure:true
        }
        return res.cookie('token',token,cookeOptions).status(200).json({
            message:"Login succesfuly",
            token:token,
            success:true
        })
    } catch (error) {
        return res.status(500).json({ 
            message: error.message||error,
            error:true
        });
    }

}