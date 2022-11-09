import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./router/tweets.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(helmet());

app.use("/tweets", tweetsRouter);
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Something went wrong");
});
app.listen(8080);