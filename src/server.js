import mongoose from "mongoose";
import app from "./app.ts";
import { config } from "dotenv";
config();
main().catch(err => console.log(err));
const port = process.env.PORT || 5000;
async function main() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("📦 MongoDB Connected Successfully");
        app.listen(port, () => {
            console.log(` Server running on port ${port}`);
        });
    }
    catch (error) {
        console.log(" Database connection failed:", error);
    }
}
main();
//# sourceMappingURL=server.js.map