import { User } from "./user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

// --- Register User ---
export const registerUser = async (data: any) => {
  const { name, email, password, phone, address } = data;

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("Email already registered");

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const newUser = await User.create({
    id: new Date().getTime().toString(),
    name,
    email,
    password: hashedPassword,
    phone,
    address,
  });

  return newUser;
};

// --- Login User ---
export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  // Check status
  if (user.status === "blocked") throw new Error("Account is blocked");

  // Generate JWT
  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return { user, token };
};

// --- Get User Profile ---
export const getUserProfile = async (userId: string) => {
  const user = await User.findOne({ id: userId });
  if (!user) throw new Error("User not found");
  return user;
};

// --- Update User Profile ---
export const updateUserProfile = async (userId: string, data: any) => {
  const user = await User.findOneAndUpdate({ id: userId }, data, {
    new: true,
  });
  if (!user) throw new Error("User not found");
  return user;
};

// --- Admin: Update User Status ---
export const updateUserStatus = async (userId: string, status: "active" | "blocked") => {
  const user = await User.findOneAndUpdate({ id: userId }, { status }, { new: true });
  if (!user) throw new Error("User not found");
  return user;
};
