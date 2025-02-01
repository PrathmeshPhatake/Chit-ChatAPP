import React, { useState } from "react";
import { toast } from "react-toastify";
import avatar_png from "../../../public/avatar.png";
import "../login/login.css";
import axios from "axios";
import { uploadfile } from "../../helper/uploadfile.jsx";
import {useNavigate} from "react-router-dom";


const API = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const navigate=useNavigate();
  const [avtar, setAvtar] = useState({
    file: null,
    url: "",
  });
  // for registration
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: "",
  });
  // for login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleRegistrationChange = async (e) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // add avtar their
  const handleAvtar = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uplaodPhoto = await uploadfile(file);
      console.log("uploadPhoto:", uplaodPhoto);
      setAvtar({
        file: file,
        url:uplaodPhoto.url,
      });
      setRegistrationData((prev) => {
        return {
          ...prev,
          profile_pic: uplaodPhoto.url,
        };
      });
    }
  };

  // console.log("avtar:",avtar);

   /*  this api for registration  */
  const handleRegistration = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const URL = `${API}/user/register`;
      const response = await axios.post(URL, registrationData);
      console.log("response", response.data);

      toast.success(response.data?.message);
      navigate('/');
      toast.info("login again!");
      if(response.data.success)
      {
        setRegistrationData({
          name:"",
          email:"",
          password:"",
          profile_pic:"",
        });
        
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log("error", error);
    }
    console.log("Data:", registrationData);
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const URL=`${API}/user/login`
      const response =await axios({
        method:'post',
        url:URL,
        data:loginData,
        withCredentials:true 
      });
      console.log("response:",response);
      toast.success(response.data.message);
      if(response.data.success)
      {
        setLoginData({
          email:" ",
          password:" "
        })
        navigate('/home');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log("error:",error);
    }
    console.log("DATA:", loginData);
  };
  return (
    <div className="login">
      <div className="item">
        <h2> Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
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
          <input
            type="text"
            placeholder="Username"
            name="name"
            value={registrationData.name}
            onChange={handleRegistrationChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={registrationData.email}
            onChange={handleRegistrationChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={registrationData.password}
            onChange={handleRegistrationChange}
          />
          <button>Sign_IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
