import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    const kfmDB = await mongoose.connect(MONGODB_URL);
    console.log("✅ MongoDB Connected Successfully!");
    return { kfmDB }; // ✅ Ensure it returns an object
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
