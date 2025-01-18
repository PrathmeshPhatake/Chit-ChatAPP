// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import '../src/index.css'; 
import Chat from './components/chat/Chat';
import List from './components/list/List';
import Detail from './components/detail/Detail';
import Login from './components/login/Login';
import Home from './components/home';
import Notification from './components/notification/Notification';

const App = () => {

  return (
   
    <div className="container">
      <Routes>
        <Route  path='/home'element={<Home/>} />
        <Route  path='/'element={<Login/>} />
        {/* for to undefined path ot move toward home login form  */}
        <Route  path='*'element={<Navigate to ="/"/>} />
      </Routes>
    <Notification/>
    </div>

  );
};

export default App;
