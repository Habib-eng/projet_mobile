import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import DotEnv from 'dotenv';
import routes from "./routes/route.js";
const dotenv = DotEnv.config();

//Define Our API Object
const app = express();

//Connect To Database
mongoose
  .connect(process.env.DB_CONNECTION_URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((e) => console.log("error connecting to mongoDB"));

//Configure Our API
const urlencodedParser = bodyParser.urlencoded({
  extended: true,
  limit: "50mb",
});

app.use(urlencodedParser);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static("storage"));

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Content-Range"
  );
  res.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("X-Total-Count",10)
  next();
});



routes(app);

app.get("/health", (req, res) => {
  res.status(200).send("ExpressJS web service is up and running");
});

app.listen(8085, () => {
  console.log("Listening @ 8085");
});
