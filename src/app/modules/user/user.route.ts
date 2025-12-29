import express from "express";
import * as userController from "./user.controller";
import { adminMiddleware } from "../../middleware/admin.middleware";
import { authMiddleware } from "../../middleware/auth";
import {
  registerValidation,
  loginValidation,
  updateProfileValidation,
  updateStatusValidation,
} from "./user.validation";
import { validate } from "../../middleware/validator.middleware";

const router = express.Router();

// ------------------ Public Routes ------------------
router.post("/register", registerValidation, validate, userController.register);
router.post("/login", loginValidation, validate, userController.login);

// ------------------ Protected Routes ------------------
router.get("/profile", authMiddleware, userController.profile);
router.put("/profile", authMiddleware, updateProfileValidation, validate, userController.updateProfile);

// ------------------ Admin Routes ------------------
router.put("/status", authMiddleware, adminMiddleware, updateStatusValidation, validate, userController.changeStatus);

export default router;
