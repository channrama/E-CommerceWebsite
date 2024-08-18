import express from "express"
import { isadmin, requiresign } from "../middleware/authmiddleware.js";

import { registercontrler,logincontroler, testcontroler } from "../controlers/authcontroler.js"
const router=express.Router()
//register routes method post
router.post('/register',registercontrler)
//login routes method post
router.post("/login",logincontroler);
//testing routes
router.post("/test",requiresign,isadmin,testcontroler)
//exporting routes
export default router;