"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserStatus = exports.updateUserProfile = exports.getUserProfile = exports.loginUser = exports.registerUser = void 0;
const user_model_js_1 = require("./user.model.js");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";
// --- Register User ---
const registerUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, phone, address } = data;
    // Check if user exists
    const existingUser = yield user_model_js_1.User.findOne({ email });
    if (existingUser)
        throw new Error("Email already registered");
    // Hash password
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
    // Create user
    const newUser = yield user_model_js_1.User.create({
        id: new Date().getTime().toString(),
        name,
        email,
        password: hashedPassword,
        phone,
        address,
    });
    return newUser;
});
exports.registerUser = registerUser;
// --- Login User ---
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_js_1.User.findOne({ email }).select("+password");
    if (!user)
        throw new Error("Invalid credentials");
    const isMatch = yield bcryptjs_1.default.compare(password, user.password);
    if (!isMatch)
        throw new Error("Invalid credentials");
    // Check status
    if (user.status === "blocked")
        throw new Error("Account is blocked");
    // Generate JWT
    const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, JWT_SECRET, {
        expiresIn: "7d",
    });
    return { user, token };
});
exports.loginUser = loginUser;
// --- Get User Profile ---
const getUserProfile = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_js_1.User.findOne({ id: userId });
    if (!user)
        throw new Error("User not found");
    return user;
});
exports.getUserProfile = getUserProfile;
// --- Update User Profile ---
const updateUserProfile = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_js_1.User.findOneAndUpdate({ id: userId }, data, {
        new: true,
    });
    if (!user)
        throw new Error("User not found");
    return user;
});
exports.updateUserProfile = updateUserProfile;
// --- Admin: Update User Status ---
const updateUserStatus = (userId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_js_1.User.findOneAndUpdate({ id: userId }, { status }, { new: true });
    if (!user)
        throw new Error("User not found");
    return user;
});
exports.updateUserStatus = updateUserStatus;
//# sourceMappingURL=user.services.js.map