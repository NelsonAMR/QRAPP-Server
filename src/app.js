import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import recordRoutes from "./routes/records.route.js";
import employeeRoutes from "./routes/employees.route.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", recordRoutes);
app.use("/api", employeeRoutes);

export default app;
