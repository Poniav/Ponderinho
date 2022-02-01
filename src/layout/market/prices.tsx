import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { MdSearch } from 'react-icons/md';
import {AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BtnSearch, PriceCard } from './styled';

interface TokenPrices {
  symbol: string;
  price: number;
  pct_change_1h: number;
  pct_change_24h: number;
  pct_change_7d: number;
  market_cap?: number;
}

export default function Prices() {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);

  async function getPrices() {
    try {
      const response = await axios.get(
        'https://api.extraterrestrial.money/v1/api/prices'
      );

      const list: any = [];
      for (const [, value] of Object.entries(response.data.prices)) {
        list.push(value);
      }
      setData(list);
      setDataFilter(list);
    } catch (error) {
      console.error(error);
      setData([]);
    }
  }

  useEffect(() => {
    if (data.length === 0) {
      getPrices();
    }
    const intervalId = setInterval(() => {
      getPrices();
    }, 20000);
    return () => clearInterval(intervalId);
  });

  const filter = (e: any) => {
    const value = e.target.value.toLowerCase();
    if(!value){
      setDataFilter(data);
      return;
    }
    const result = data.filter((item: TokenPrices) => {
      const symbol = item.symbol.toLowerCase()
      return symbol.search(value) !== -1;
    })
    setDataFilter(result);
  };

  return (
    <Container>
      <main style={{ padding: '1rem 0' }}>
        <Row>
          <Col md={8}>
            <h2
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: '22px',
                marginBottom: '20px',
              }}
            >
              Prices
            </h2>
          </Col>
          <Col>
          <Row>
            <Col>
              <Form onChange={filter}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    style={{
                      background: '#3c435e',
                      border: '#4a64ca',
                      padding: '10px',
                      color: '#848dae',
                    }}
                    type="text"
                    placeholder="Search funds wallet"
                    autoComplete="off"
                  />
                  <BtnSearch>
                    <MdSearch />
                  </BtnSearch>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Button variant="primary">New asset</Button>
            </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {dataFilter.map((coin: TokenPrices) => {
            return (
              <>
                {
                  <PriceCard md={4} key={coin.symbol} className="coin">
                    <Col md={2}>
                    <h3
                      style={{
                        fontSize: '15px',
                        textAlign: 'center',
                      }}
                    >
                      {coin.symbol}
                    </h3>
                    </Col>
                    <Col>
                    <span>{coin.price.toFixed(3)}$</span>
                    <AiFillStar style={{color: '#ccc119', fontSize: '19px'}}/>
                    </Col>
                  </PriceCard>
                }
              </>
            );
          })}
        </Row>
      </main>
    </Container>
  );
}
