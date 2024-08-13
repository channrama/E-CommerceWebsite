import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
const DataBase=async ()=>{
    try {
       const conn= await mongoose.connect(process.env.DataBase_URL);
      console.log(`Data Base is connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error while connecting Data Base ${error}`)
    }
}
export default DataBase;