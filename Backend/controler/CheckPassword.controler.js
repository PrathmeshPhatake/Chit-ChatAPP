import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const checkPassword = async (req, res) => {
  try {
    const { userid, password } = req.body;
    if (!userid || !password) {
      return res.status(400).json({
        message: "required Userid and password",
        error: true,
      });
    }
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({
        message: "No user found!",
        error: true,
      });
    }
    const verifiedPassword = await bcrypt.compare(password,user.password);
    if (!verifiedPassword) {
      return res.status(401).json({
        message: "Invalid password",
        error: true,
      });
    }
    // create token using id and email with secrete key 
    const tokenData = {
      id: user._id,
      email: user.email,
    };

    // create token =tokendata+secreatekey 
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    const cookieOption = {
      httpOnly: true,
      secure: true,
    };

    // save it in cookies 
    return res.cookie("token", token, cookieOption).status(200).json({
      message: "Login succesfuly!",
      token:token,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
        message: "Internal server error",
        error:true,
    })
  }
};
