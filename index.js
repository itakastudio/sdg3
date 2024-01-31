import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.body)
  res.status(200);
});



app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
