"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_route_1 = __importDefault(require("./app/modules/user/user.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// ------------------ Middleware ------------------
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ------------------ Routes ------------------
app.use("/api/users", user_route_1.default);
// ------------------ Default Route ------------------
app.get("/", (req, res) => {
    res.send("Daily Hut API is running");
});
// ------------------ Error Handling Middleware ------------------
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});
// ------------------ MongoDB Connection ------------------
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/daily-hut";
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));
exports.default = app;
//# sourceMappingURL=app.js.map