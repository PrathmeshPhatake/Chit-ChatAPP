import mongoose from "mongoose";

const signup=mongoose.Schema({
    img:{
        type:String,
        required:true,
    },
   username:{
    type:String,
    required:true,
    unique:true,
   },
   password:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
   }
});
const User=mongoose.model("User",signup);
export default User;