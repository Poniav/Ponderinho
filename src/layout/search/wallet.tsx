import { Col, Container, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import lcdl from '../../app/connector/lcdl';
import { BtnSearch } from './styled';
import { toDec, fixFloat } from '../../libs/math';
import { ibsCls } from '../../libs/checker';
import CoinCard from './CoinCard';
import { Coin } from '@terra-money/terra.js';

const custom_address = 'terra1qw4f3puhhfldu4hw2apyusvcwm7sh87zj0fa6n';

export default function Wallet() {
  const [coins, setCoins] = useState<any>([]);
  const [tokens, setTokens] = useState<any>([]);

  const handleSearch = async (e: any) => {
    const address: string = e.target.value;
    if (!address) {
      setCoins([]);
      setTokens([]);
      return;
    }

    let balance = await lcdl.bank.balance(address);
    let data: any[] = balance[0].toData();
    let coinList: object[] = [];

    const newData = ibsCls(data);

    for (const [, value] of Object.entries(newData)) {
      const val: any = value;
      const dec = toDec(val.amount);
      const fix = fixFloat(dec);
      // let price_uusd: number;
      // const offerCoin = new Coin(val.denom, val.amount);
      let coin = { denom: val.denom, amount: fix };
      // if (val.denom !== 'uusd') {
      //   const price = await lcdl.market.swapRate(offerCoin, 'uusd');
      //   price_uusd = parseFloat(price.toData().amount) * 10 ** -6;
      //   Object.assign(coin, { uusd: price_uusd });
      // }
      coinList.push(coin);
    }
    setCoins(coinList);
  };

  return (
    <Container>
      <Helmet>
        <title>Search | Ponderinho</title>
      </Helmet>
      <main style={{ padding: '1rem 0' }}>
        <h2 style={{ color: 'white', fontWeight: '700', fontSize: '22px' }}>
          Wallet Funds
        </h2>
        <Form onChange={handleSearch}>
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
        <Row>
          {coins.length !== 0 && <CoinCard coins={coins} />}
          {coins.length !== 0 && <CoinCard coins={coins} />}
        </Row>
        {/* <Alert variant={'secondary'}>
          Verify if the address is correct ! It must start with 'terra'
        </Alert> */}
      </main>
    </Container>
  );
}
