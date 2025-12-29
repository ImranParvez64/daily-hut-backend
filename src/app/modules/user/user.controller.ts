import { Response } from "express";
import * as userService from "./user.services";
import { AuthenticatedRequest } from "../../middleware/type";
import mongoose from "mongoose";

// ------------------ Register ------------------
export const register = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await userService.registerUser(req.body);
    return res.status(201).json({ success: true, user });
  } catch (error: any) {
    // DEBUG LINE (safe to keep)
    console.log("DB STATE INSIDE CONTROLLER:", mongoose.connection.readyState);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ------------------ Login ------------------
export const login = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    return res.status(200).json({ success: true, ...result });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// ------------------ Profile View ------------------
export const profile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) throw new Error("Unauthorized");
    const user = await userService.getUserProfile(req.user.id);
    return res.status(200).json({ success: true, user });
  } catch (error: any) {
    return res.status(404).json({ success: false, message: error.message });
  }
};

// ------------------ Profile Update ------------------
export const updateProfile = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user) throw new Error("Unauthorized");
    const user = await userService.updateUserProfile(req.user.id, req.body);
    return res.status(200).json({ success: true, user });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// ------------------ Admin: Change Status ------------------
export const changeStatus = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { userId, status } = req.body;
    const user = await userService.updateUserStatus(userId, status);
    return res.status(200).json({ success: true, user });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
