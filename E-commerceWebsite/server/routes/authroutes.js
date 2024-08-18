import express from "express"
import { isAdmin, requireSignIn } from "../middleware/authmiddleware.js";

import { registercontrler,logincontroler } from "../controlers/authcontroler.js"
const router=express.Router()
//register routes method post
router.post('/register',registercontrler)
//login routes method post
router.post("/login",isAdmin,logincontroler);
//testing routes

export default router;