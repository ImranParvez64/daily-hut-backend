"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = void 0;
// Admin-only middleware
const adminMiddleware = (req, res, next) => {
    // Ensure req.user exists
    if (!req.user) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    // Check if role is admin
    if (req.user.role !== "admin") {
        return res.status(403).json({ success: false, message: "Forbidden: Admins only" });
    }
    next();
};
exports.adminMiddleware = adminMiddleware;
//# sourceMappingURL=admin.middleware.js.map