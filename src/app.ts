import express from "express";
import cookieParser from "cookie-parser";
import { appIsOnProduction } from "./utils";

const cors = require("cors");
const helmet = require("helmet");

import routes from "./routes";

import { error404Handler, errorHandler } from "./middlewares";

const app = express();

if (!appIsOnProduction()) {
  require("dotenv").config();

  const logger = require("morgan");
  app.use(logger("dev"));
}

app.use(!appIsOnProduction() ? cors() : cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/v1", routes);

app.use(error404Handler);
app.use(errorHandler);

export default app;
