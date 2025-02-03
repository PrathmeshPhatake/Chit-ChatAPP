import React from "react";
import List from "./list/List";
import Chat from "./chat/Chat";
import Detail from "./detail/Detail";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, useLocation, useNavigate } from "react-router-dom";
import {
  setUser,
  setToken,
  logout,
  setSocketConnection,
  setOnlineUser,
} from "./redux/userSlice.jsx";
import io from "socket.io-client";
import axios from "axios";
const API = import.meta.env.VITE_BACKEND_URL;
const home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('user:',user);
  const fetchuserdetails = async () => {
    try {
      const URL = `${API}/user/user-details`;
      const response = await axios({
        method: "get",
        url: URL,
        withCredentials: true,
      });
      // const temp=response?.data?.data;
      dispatch(setUser(response?.data?.data));
      console.log("user details:", temp);
    } catch (error) {
      console.log("error:", error);
    }
  };
  // run at once  when we wnat to join it
  useEffect(() => {
    fetchuserdetails();
  }, []);

  /* ****
  socket connection  
  */

  useEffect(() => {
    const socketConnection = io(API, {
      auth: {
        token: localStorage.getItem("token"),
      },
    });

    socketConnection.on("onlineUser", (data) => {
      console.log(data);
      dispatch(setOnlineUser(data));
    });

    dispatch(setSocketConnection(socketConnection));
    return () => {
      socketConnection.disconnect();
    };
  });

  return (
    <>
      <List />
      <Chat />
      <Detail />
    </>
  );
};

export default home;
