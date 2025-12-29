export declare const registerUser: (data: any) => Promise<import("mongoose").Document<unknown, {}, import("./user.interface.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.interface.js").IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const loginUser: (email: string, password: string) => Promise<{
    user: import("mongoose").Document<unknown, {}, import("./user.interface.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.interface.js").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    };
    token: string;
}>;
export declare const getUserProfile: (userId: string) => Promise<import("mongoose").Document<unknown, {}, import("./user.interface.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.interface.js").IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const updateUserProfile: (userId: string, data: any) => Promise<import("mongoose").Document<unknown, {}, import("./user.interface.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.interface.js").IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const updateUserStatus: (userId: string, status: "active" | "blocked") => Promise<import("mongoose").Document<unknown, {}, import("./user.interface.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.interface.js").IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user.services.d.ts.map