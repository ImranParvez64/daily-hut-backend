import { Request } from "express";

// AuthenticatedRequest টাইপ: JWT verify করার পরে req.user থাকবে
export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: "user" | "admin" | "seller";
  };
}
