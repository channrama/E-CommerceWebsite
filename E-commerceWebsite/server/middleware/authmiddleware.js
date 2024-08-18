import jwt from "jsonwebtoken";
import userModel from "../models/usermodel.js";
import dotenv from "dotenv"
dotenv.config();
// Middleware to check if the user is signed in
export const requiresign = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is required",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    return res.status(401).json({
      success: false,
      message: "Invalid token or token expired",
    });
  }
};

// Middleware to check if the user is an admin
export const isadmin = async (req, res, next) => {
  try {
    const {email}=req.body;
    const user = await userModel.findOne({email});
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.role !== 1) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }
else
    next();
  } catch (error) {
    console.error("Error in isadmin middleware:", error);
    return res.status(500).json({
      success: false,
      error: error.message || error,
      message: "Error in middleware",
    });
  }
};
