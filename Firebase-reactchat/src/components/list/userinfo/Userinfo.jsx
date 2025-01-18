import './userinfo.css'
import avatar from "../../../../public/avatar.png"
import { useEffect } from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_BACKEND_URL;
import { useState } from 'react';
const Userinfo = () => {
  const [user, setUser] = useState({});
  const fetchuserdetails=async()=>
  {
    try {
      const URL=`${API}/user/user-details`
      const response=await axios({
        method:'get',
        url:URL,
        withCredentials:true
      })
      const temp=response?.data?.data;
      setUser(temp);
     
      console.log("user details:",user);
    } catch (error) {
      console.log("error:",error);
    }
  }
  // run at once  when we wnat to join it 
  useEffect(()=>{
    fetchuserdetails();
  },[])
  return (
    <div className='userinfo'>
        <div className='user'>
        <img src={avatar ||user?.profile_pic } alt="" />
        <h2>{user.name}</h2>
        </div>
        <div className='icons'>
            <img src="./more.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./edit.png" alt="" />
        </div>
    </div>
  )
}

export default Userinfo