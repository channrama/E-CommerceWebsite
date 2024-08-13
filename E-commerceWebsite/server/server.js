import express from "express";
import dotenv from "dotenv";
import DataBase from "./configarations/databaseconfig.js";
import morgan from "morgan";
const server = express();
dotenv.config();
DataBase();
server.use(express.json());
server.use(morgan('dev'))
server.get("/b", (req, res) => {
  res.send({
    message: "Welcome",
  });
});

server.post("/", (req, res) => {
  const { username, password } = req.body[0];
  console.log(`name: ${username}\npassword: ${password}`);
  res.send("Message received");
});



server.listen(process.env.port, () => {
  console.log(`Server started at port  ${process.env.port}`);
});
