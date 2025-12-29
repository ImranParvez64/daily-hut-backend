import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./app/modules/user/user.route";

dotenv.config();

const app: Application = express();

// ------------------ Middleware ------------------
app.use(cors());
app.use(express.json());

// ------------------ Routes ------------------
app.use("/api/users", userRoutes);

// ------------------ Default Route ------------------
app.get("/", (req: Request, res: Response) => {
  res.send("Daily Hut API is running");
});

// ------------------ Error Handling Middleware ------------------
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ------------------ MongoDB Connection ------------------
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/daily-hut";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

export default app;
