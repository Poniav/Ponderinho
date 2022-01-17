const express = require("express");
const axios = require("axios");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
var cron = require("node-cron");
const mongo = require("./db/mongo.js");
const coins = require("./db/ads.js");
const app = express();
const port = 4000;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

const url = "https://pro-api.coinmarketcap.com/v1/";
const key = {
  params: {
    CMC_PRO_API_KEY: process.env.CMC_KEY,
  },
};

function getListCoins() {
  return axios
    .get(url + "cryptocurrency/listings/latest", key)
    .then((response) => response.data);
}

app.get("/list", async (req, res) => {
  const list = await getListCoins();
  res.setHeader("Content-Type", "application/json");
  res.json(list);
});

app.get("/pond", async (req, res) => {
  const list = await getListCoins();
  res.setHeader("Content-Type", "application/json");
  res.json(list);
});

console.log(mongo.getDatabase());
coins.insertCoin()

// cron.schedule("1 * * * * *", async () => {
//   console.log("running a task every minute");
//   const list = await getListCoins();
//   console.log(list);
// });

app.listen(port, () => {
  console.log(`API Pond at http://localhost:${port}`);
});
