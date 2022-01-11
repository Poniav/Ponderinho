const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { response } = require("express");
const app = express();
const port = 4000;
require("dotenv").config();

app.use(express.json());
app.use(cors());

const url = "https://pro-api.coinmarketcap.com/v1/";
const key = {
  params: {
    CMC_PRO_API_KEY: process.env.CMC_KEY,
  },
};

function getListCoins() {
  return axios
    .get(url + "v1/cryptocurrency/listings/latest", key)
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

app.listen(port, () => {
  console.log(`API Pond at http://localhost:${port}`);
});
