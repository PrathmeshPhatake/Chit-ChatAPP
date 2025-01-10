import express from "express";
const router=express.Router();
import { register } from "../controler/user.controler.js";
import { checkEmail } from "../controler/checkEmail.controler.js";
import {checkPassword} from "../controler/CheckPassword.controler.js"
// for registration 
router.post("/register", register);

// for email verification
router.post("/email",checkEmail);

// cheeck user password
router.post("/password",checkPassword);

export default router;