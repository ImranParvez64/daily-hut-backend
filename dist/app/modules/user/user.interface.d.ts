import { Types } from "mongoose";
export type UserRole = "user" | "admin" | "seller";
export type UserStatus = "active" | "blocked";
export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role: UserRole;
    status: UserStatus;
    wishlist: Types.ObjectId[];
    orders: Types.ObjectId[];
    createdAt: Date;
}
//# sourceMappingURL=user.interface.d.ts.map