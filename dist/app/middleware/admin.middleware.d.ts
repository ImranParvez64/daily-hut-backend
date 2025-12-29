import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./type";
export declare const adminMiddleware: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=admin.middleware.d.ts.map