import React, { useState } from "react";
import { toast } from "react-toastify";
import avatar_png from "../../../public/avatar.png";
import "../login/login.css";
import axios from 'axios';
import { uploadfile } from "../../helper/uploadfile.jsx";


const API= import.meta.env.VITE_BACKEND_URL;
const URL = `http://localhost:4001/user/register`;

const Login = () => {
  const [avtar, setAvtar] = useState({
    file: null,
    url: "",
  });
  // for registration 
  const [registrationData,setRegistrationData]=useState({
    Username:"",
    email:" ",
    password:"",
    profile_pic: null
  })
  // for login 
  const [loginData,setLoginData]=useState({
    email:"",
    password:""
  })

  const handleRegistrationChange =async(e)=>{
    const {name,value}=e.target
    setRegistrationData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const handleLoginChange =(e)=>{
    const {name,value}=e.target
    setLoginData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }

  // add avtar their
  const handleAvtar =async (e) => {
    const file= e.target.files[0]
    if (file) {
      const uplaodPhoto=await uploadfile(file);
      console.log("uploadPhoto:",uplaodPhoto);
      setAvtar({
        files: file,
        url: URL.createObjectURL(file),
      });
      setRegistrationData((prev)=>{
        return {
          ...prev,
          profile_pic:file.name
        }
      })
    }
  };
  
  console.log("avtar:",avtar);


  const handleRegistration=async(e)=>{
    e.preventDefault();
    e.stopPropagation()
      // stor in backend
  //  const URL=`${API}/user/register`;
   try {
    const response=await axios.post(URL,registrationData);
    console.log("response",response);
    toast.success("sign_IN succesfuly!");
   } catch (error) {
     console.log("error",error);
   }
    console.log("Data:",registrationData);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success("Login Successful!");
    console.log("DATA:",loginData);
  };
  return (
    <div className="login">
      <div className="item">
        <h2> Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" value={loginData.email} onChange={handleLoginChange} />
          <input type="password" placeholder="Password" name="password" value={loginData.password} onChange={handleLoginChange}/>
          <button>Log_IN</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegistration}>
          <label htmlFor="file">
            <img src={avtar.url || avatar_png} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
           
            onChange={handleAvtar}
          />
          <input type="text" placeholder="Username" name="Username" value={registrationData.Username} onChange={handleRegistrationChange} />
          <input type="text" placeholder="Email" name="email" value={registrationData.email} onChange={handleRegistrationChange} />
          <input type="password" placeholder="Password" name="password" value={registrationData.password}  onChange={handleRegistrationChange} />
          <button>Sign_IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
