"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.changeStatus = exports.updateProfile = exports.profile = exports.login = exports.register = void 0;
const userService = __importStar(require("./user.services"));
const mongoose_1 = __importDefault(require("mongoose"));
// ------------------ Register ------------------
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService.registerUser(req.body);
        return res.status(201).json({ success: true, user });
    }
    catch (error) {
        // DEBUG LINE (safe to keep)
        console.log("DB STATE INSIDE CONTROLLER:", mongoose_1.default.connection.readyState);
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});
exports.register = register;
// ------------------ Login ------------------
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const result = yield userService.loginUser(email, password);
        return res.status(200).json(Object.assign({ success: true }, result));
    }
    catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
});
exports.login = login;
// ------------------ Profile View ------------------
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user)
            throw new Error("Unauthorized");
        const user = yield userService.getUserProfile(req.user.id);
        return res.status(200).json({ success: true, user });
    }
    catch (error) {
        return res.status(404).json({ success: false, message: error.message });
    }
});
exports.profile = profile;
// ------------------ Profile Update ------------------
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user)
            throw new Error("Unauthorized");
        const user = yield userService.updateUserProfile(req.user.id, req.body);
        return res.status(200).json({ success: true, user });
    }
    catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
});
exports.updateProfile = updateProfile;
// ------------------ Admin: Change Status ------------------
const changeStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, status } = req.body;
        const user = yield userService.updateUserStatus(userId, status);
        return res.status(200).json({ success: true, user });
    }
    catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
});
exports.changeStatus = changeStatus;
//# sourceMappingURL=user.controller.js.map