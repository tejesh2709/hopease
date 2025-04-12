import dotenv from "dotenv";
dotenv.config();

export const config = {
    port: process.env.PORT || 8000,
    databaseUrl: process.env.DATABASE_URL || "",
    clerk_secret: process.env.CLERK_WEBHOOK_SECRET_KEY || "",
    genai_api_key: process.env.GENAI_API_KEY || ""
}