import User from "../model/auth.model.js";

export const signup=(req,res)=>{
    try {
        const{img,username,email,password}=req.body;
        const user=User.findOne({username});
        if(user)
        {
            return res.status(400).json({message:"Username aleady exist"});
        }
        const newuser= new User({
            profileImg:img,
            username,
            email,
            password,
        });
        newuser.save();
        res.status(201).send({message:"user created succesfuly"});
    } catch (error) {
        console.log("Error:",error);
        res.status(500).send({message:"Internal error occured"});
    }
}