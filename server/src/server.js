const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db");

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({ saludo: "holaaaaa!" });
});

app.listen(8888, () => {
  console.log("API Mongo is listening on: 8888");
});
