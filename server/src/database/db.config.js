import mongoose from "mongoose";

const connectDB = async () => {
    console.log(process.env.MONGO_URL)
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected successfully");
  } catch (err) {
    console.log("Error in DB connection", err);
    process.exit(1);
  }
};

export default connectDB;
