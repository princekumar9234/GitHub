import express from "express";
import { ConnectDB } from "./config/DataBase.js";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import config from "./config/auth.config.js";
import authRouter from "./routes/auth.route.js"
 
const app = express();
ConnectDB(); //Call the dataBase.
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(helmet());

app.use(
  cors({
    origin: config.FRONTEND_URL,
    credentials: true,
  }),
);

app.use("/user", authRouter);

export default app;