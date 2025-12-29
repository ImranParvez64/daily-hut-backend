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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController = __importStar(require("./user.controller"));
const admin_middleware_1 = require("../../middleware/admin.middleware");
const auth_1 = require("../../middleware/auth");
const user_validation_1 = require("./user.validation");
const validator_middleware_1 = require("../../middleware/validator.middleware");
const router = express_1.default.Router();
// ------------------ Public Routes ------------------
router.post("/register", user_validation_1.registerValidation, validator_middleware_1.validate, userController.register);
router.post("/login", user_validation_1.loginValidation, validator_middleware_1.validate, userController.login);
// ------------------ Protected Routes ------------------
router.get("/profile", auth_1.authMiddleware, userController.profile);
router.put("/profile", auth_1.authMiddleware, user_validation_1.updateProfileValidation, validator_middleware_1.validate, userController.updateProfile);
// ------------------ Admin Routes ------------------
router.put("/status", auth_1.authMiddleware, admin_middleware_1.adminMiddleware, user_validation_1.updateStatusValidation, validator_middleware_1.validate, userController.changeStatus);
exports.default = router;
//# sourceMappingURL=user.route.js.map