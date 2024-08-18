//all authentication controlers are written in this file
import { hashpassword, comparepassword } from "../helper/authhelper.js";
import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken";
//user registration start here
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
    const hashedpassword = await hashpassword(password);
    //save
    const user = new userModel({
      name,
      password: hashedpassword,
      phone,
      address,
      email,
    }).save();
    res.send({
      success: true,
      message: "User registerd suceesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registeration:",
      error,
    });
  }
};
//regiter function ends

//user login function start here
export const logincontroler = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validations
    if (!email || !password)
      return res.status(404).send({
        success: false,
        message: "invalid username or password ",
      });
    //geting user from database by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email not registerd",
      });
    }
    //checking password with hashedpassword
    const match = await comparepassword(password, user.password);
    if (!match)
      return res.status(200).send({
        success: false,
        message: "password is incorrect",
      });

    //token
    const token = await jwt.sign({ _id: user._itd }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Loged in succesfully",
      details: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role:user.role,
        _id:user._id
      },
      token,
      //user deatils sendind as response
    });
  } catch (error) {
    res.status(404).send({
      message: error,
    });
  }
};
//login Server end's here

