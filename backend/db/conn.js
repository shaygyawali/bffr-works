import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(typeof process.env.ATLAS_URI);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI, {
      //must add in order to not get any error masseges:
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`mongo database is connected!!! ${conn.connection.host} `);
  } catch (error) {
    console.error(`Error: ${error} `);
    process.exit(1); //passing 1 - will exit the proccess with error
  }
};

export default connectDB;
