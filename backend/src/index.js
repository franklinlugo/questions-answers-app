import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import "dotenv/config";

import router from "./routes/question";
// conection to database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to database");
});

// express app
const app = express();

// enhance the app security eith helmet
app.use(helmet());

// bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all cors request
app.use(cors());

// log http request
app.use(morgan("combined"));

app.use("/", router);

app.listen(process.env.PORT);
