import express from "express";
import dotenv from "dotenv";
import DataBase from "./configarations/databaseconfig.js";
import morgan from "morgan";
import authroutes from "./routes/authroutes.js";
dotenv.config();
DataBase();
const server = express();

server.use(express.json());
server.use(morgan("dev"));
//routes
server.use("/", authroutes);

server.listen(process.env.port, () => {
  console.log(`Server started at port  ${process.env.port}`);
});
