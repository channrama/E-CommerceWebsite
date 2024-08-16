import express from "express"
import { registercontrler } from "../controlers/authcontroler.js"
const router=express.Router()
//register routes method post
router.post('/register',registercontrler)

//exporting rotes
export default router;