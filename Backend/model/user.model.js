import mongoose  from "mongoose";
const userscheam=mongoose.Schema({
    name:{
        type:String,
        required:[true,"provde name"]
    },
    email:{
        type:String,
        required:[true,"Provide email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Provide password']
    },
    profile_pic:{
        type:String,
        default:""
    }
},{
    Timestamp:true,
});
//  modexl wiith User-->table name of it 
const User=mongoose.model("User",userscheam);
export default User;