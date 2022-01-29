import { LCDClient } from "@terra-money/terra.js";
// require('dotenv').config();

// console.log(process.env.NODE_URL)

// connect to Colombus Mainnet
const LDLC = new LCDClient({
  URL: "https://lcd.terra.dev",
  chainID: "columbus-5",
});

// To use LocalTerra
// const terra = new LCDClient({
//   URL: 'http://localhost:1317',
//   chainID: 'localterra'
// });

export default LDLC;