import express from "express";
import { ConnectDB } from "./config/DataBase.js";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import config from "./config/auth.config.js";
import authRouter from "./routes/auth.route.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import initRepo from "./controller/init.controller.js";

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

//yargs console commands
yargs(hideBin(process.argv))
  .command("init", "initialise a new repository", {}, initRepo)
  .command("add <File>", "add a file to the repository", (yargs) => {
    yargs.positional("file", {
      describe: "file to add to the staging area",
      type: "string",
    });
  })
  .demandCommand(1, "you need atleast one command")
  .help()
  .argv();

export default app;
