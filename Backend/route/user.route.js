import express from "express";
const router=express.Router();
import { register } from "../controler/user.controler.js";
import { checkEmail } from "../controler/checkEmail.controler.js";
import {login} from "../controler/login.controler.js";
import {UserDetails} from "../controler/userDetails.controler.js"
import { logout } from "../controler/logout.controler.js";
import { updateUser } from "../controler/updateUser.controler.js";
// for registration 
router.post("/register", register);

// for email verification
router.post("/email",checkEmail);

// cheeck user password
router.post("/login",login);

// get user details from token 
router.get('/user-details',UserDetails);

// for logout user
router.get('/logout-user',logout);


// for update user detailed 
router.post('/update-user',updateUser);
export default router;