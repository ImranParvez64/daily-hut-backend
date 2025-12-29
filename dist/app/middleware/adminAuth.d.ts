import { Request, Response, NextFunction } from "express";
export declare const adminAuth: (req: Request & {
    user?: {
        role: string;
    };
}, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=adminAuth.d.ts.map