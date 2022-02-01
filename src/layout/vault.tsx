import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import BGCard from '../../assets/images/bgcard.svg';

interface TokenPrices {
  symbol: string;
  price: number;
  pct_change_1h: number;
  pct_change_24h: number;
  pct_change_7d: number;
  market_cap?: number;
}

export default function Vault() {
  const [data, setData] = useState([]);

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
    }, 10000);
    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <Container>
      <main style={{ padding: '1rem 0' }}>
        <h2 style={{ color: 'white', fontWeight: '700', fontSize: '22px', marginBottom: '20px'}}>
          Vault
        </h2>
        {data.map((coin: TokenPrices) => {
          return (
            <>
              {
                <div
                  key={coin.symbol}
                  className="coin col-4"
                  style={{
                    color: 'white',
                    float: 'left',
                    display: 'flex',
                    flexDirection: 'row',
                    background: 'url(BGCard)',
                    padding: '10px 20px 10px 20px',
                    marginBottom: '4px',
                    borderRadius: '4px'
                  }}
                >
                  <h3 style={{fontSize: '15px', fontWeight: 'bold', textAlign: 'center'}}>{coin.symbol}</h3>
                </div>
              }
            </>
          );
        })}
      </main>
    </Container>
  );
}
