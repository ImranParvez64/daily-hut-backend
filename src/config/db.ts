import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("📦 MongoDB already connected");
    return;
  }

  await mongoose.connect(process.env.DATABASE_URL as string, {
    serverSelectionTimeoutMS: 5000,
  });

  console.log("📦 MongoDB Connected Successfully");
};

export default connectDB;
