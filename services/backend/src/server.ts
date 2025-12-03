import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "dotenv";

config();

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_API_URL || true }));
app.use(express.json());
app.use(morgan("dev"));

export default app;
