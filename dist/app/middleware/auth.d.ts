import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./type";
export declare const authMiddleware: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.d.ts.map