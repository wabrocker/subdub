import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV } = process.env;
