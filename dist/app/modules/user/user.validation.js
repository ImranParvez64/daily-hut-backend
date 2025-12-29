"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatusValidation = exports.updateProfileValidation = exports.loginValidation = exports.registerValidation = void 0;
const express_validator_1 = require("express-validator");
exports.registerValidation = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name is required"),
    (0, express_validator_1.body)("email").isEmail().withMessage("Valid email is required"),
    (0, express_validator_1.body)("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    (0, express_validator_1.body)("phone").notEmpty().withMessage("Phone number is required"),
    (0, express_validator_1.body)("address").notEmpty().withMessage("Address is required"),
];
exports.loginValidation = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Valid email is required"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required"),
];
exports.updateProfileValidation = [
    (0, express_validator_1.body)("name").optional().notEmpty().withMessage("Name cannot be empty"),
    (0, express_validator_1.body)("phone").optional().notEmpty().withMessage("Phone cannot be empty"),
    (0, express_validator_1.body)("address").optional().notEmpty().withMessage("Address cannot be empty"),
];
exports.updateStatusValidation = [
    (0, express_validator_1.body)("userId").notEmpty().withMessage("User ID is required"),
    (0, express_validator_1.body)("status").isIn(["active", "blocked"]).withMessage("Status must be active or blocked"),
];
//# sourceMappingURL=user.validation.js.map