import './userinfo.css'
import avatar from "../../../../public/avatar.png"
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation, useNavigate } from 'react-router-dom'
import {setUser,setToken,logout,setOnlineUser} from '../../redux/userSlice.jsx';
const API = import.meta.env.VITE_BACKEND_URL;
import { useState } from 'react';
const Userinfo = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log(user)
  return (
    <div className='userinfo'>
        <div className='user'>
        <img src={user?.profile_pic ||avatar } alt="" />
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

export default Userinfo;