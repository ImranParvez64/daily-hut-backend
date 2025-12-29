import { Request, Response, NextFunction } from "express";

export const adminAuth = (
  req: Request & { user?: { role: string } },
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Forbidden: Admin access only",
    });
  }

  next();
};
