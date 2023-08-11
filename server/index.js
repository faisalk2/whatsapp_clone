import express from "express";
import dotenv from "dotenv";
import connect from "./database/db.js";
import route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();


const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", route);

app.listen(process.env.PORT, async () => {
  try {
    await connect;
    console.log("connected");
  } catch (error) {
    console.log("port is not connected");
  }
});
