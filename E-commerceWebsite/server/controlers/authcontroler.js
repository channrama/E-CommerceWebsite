import { hashpassword } from "../helper/authhelper.js";
import userModel  from "../models/usermodel.js"
export const registercontrler = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //valditaions
    if (!name) res.send({ error: "name is required" });
    if (!email) res.send({ error: "email is required" });
    if (!password) res.send({ error: "password is required" });
    if (!phone) res.send({ error: "phone number is required" });
    if (!address) res.send({ error: "adress is required" });
    //checking for exixiting user
    const exitinguser = await userModel.findOne({ email });
    if (exitinguser) {
      return res.status(200).send({
        message: "user already registerd please login",
      }); 
    }
    //register user
    const hashedpassword=await hashpassword(password);
    //save
    const user=new userModel({name,password:hashedpassword,phone,address,email}).save()
    res.send({
        success:true,
        message:"User registerd suceesfully",
        user
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registeration:",
      error,
    });
  }
};
