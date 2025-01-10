import User from "../model/user.model.js";
import bcrypt from 'bcryptjs'
export const register=async(req,res)=>{
    try {
        const{name,email,password,profile_pic}=req.body;
        const checkUser=await User.findOne({email});
        if(checkUser)
        {
            return res.status(400).json({
                message:"Username aleady exist",
                error:true
            });
        }
        // password encrytption
        const hashedPassword=await bcrypt.hash(password,10);  
        const newUser= await new User({
            name,
            email,
            password:hashedPassword,
            profile_pic
        });
        await newUser.save();
        res.status(201).json({message:"user created succesfuly",
            data: newUser,
            succes:true
        });
    } catch (error) {
        console.log("Error:",error);
        res.status(500).josn({message:error.message|| error,
            error:true
        });
    }
}