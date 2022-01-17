import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  const [data, setData] = useState(null);
  const [key, setKey] = useState(null);

  // useEffect(() => {
  //   if (Config || Config[0]["CMC_KEY"]) {
  //     const key = Config[0]["CMC_KEY"];
  //     setKey(key);
  //     console.log(key);
  //     getListBinance(key);
  //   }
  // }, []);

  // const getListBinance = async (key) => {
  //   const URL = `${
  //     "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?&CMC_PRO_API_KEY=" +
  //     key
  //   }`;
  //   const options = {
  //     method: "GET",
  //     mode: "cors",
  //     headers: new Headers({
  //       "content-type": "application/json",
  //       "Access-Control-Allow-Origin": "https://coinmarketcap.com",
  //       "X-CMC_PRO_API_KEY": key,
  //     }),
  //   };
  //   const response = await fetch(URL, options);
  //   const data = await response.json();
  //   if (response.ok) {
  //     console.log(data);
  //   }
  // };

  return (
    <>
      <Container>
        <Helmet>
          <title>Ponderinho | Pond community </title>
        </Helmet>
        <div class="container">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-12 col-lg-4">
              <h1 class="heading">Accelerating Decentralized Communication</h1>
              <p class="par">
                An open protocol that provides a <br /> high-performance
                programmable network infrastructure for DeFi and Web 3.0
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </Container>
    </>
  );
}
