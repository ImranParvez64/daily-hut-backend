import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./type";

// Admin-only middleware
export const adminMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  // Ensure req.user exists
  if (!req.user) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  // Check if role is admin
  if (req.user.role !== "admin") {
    return res.status(403).json({ success: false, message: "Forbidden: Admins only" });
  }

  next();
};
