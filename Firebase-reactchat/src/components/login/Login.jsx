import React, { useState } from "react";
import { toast } from "react-toastify";
import avatar_png from "../../../public/avatar.png";
import "../login/login.css";
const Login = () => {
  const [avtar, setAvtar] = useState({
    file: null,
    url: "",
  });

  // add avtar their
  const handleAvtar = (e) => {
    if (e.target.files[0]) {
      setAvtar({
        files: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault()
    toast.warn("hello  ")
  };
  return (
    <div className="login">
      <div className="item">
        <h2> Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign IN</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form>
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
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign_IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
