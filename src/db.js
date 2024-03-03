import mongoose from "mongoose";
import { DB_URI } from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("DB is connected");
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
