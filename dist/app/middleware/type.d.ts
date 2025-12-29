import { Request } from "express";
export interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
        role: "user" | "admin" | "seller";
    };
}
//# sourceMappingURL=type.d.ts.map