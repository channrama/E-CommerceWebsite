import express from "express"
import { registercontrler,logincontroler } from "../controlers/authcontroler.js"
const router=express.Router()
//register routes method post
router.post('/register',registercontrler)
//login routes method post
router.post("/login",logincontroler);

//exporting rotes
export default router;