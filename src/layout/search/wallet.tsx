import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import lcdl from '../../app/connector/lcdl';
import styled from 'styled-components';
import { Coin, Coins } from '@terra-money/terra.js';
import { BtnSearch } from './styled';
import { toDec, fixFloat, ibsCls } from '../../utils/math';

const custom_address = 'terra1qw4f3puhhfldu4hw2apyusvcwm7sh87zj0fa6n';

const CoinsHook = (props: any) => {
  return (
    <Col>
      <h3 style={{ color: 'white', fontWeight: '700', fontSize: '18px' }}>
        Coins
      </h3>
      {props.coins.map((coin: any) => {
            return (
              <ul className='coin' style={{color: 'white'}} key={coin}>
                <li className='denom'>{coin.denom}</li>
                <li className='count'>{coin.amount}</li>
              </ul>
            )
          })
        }
    </Col>
  );
};

export default function Wallet() {
  const [error, setError] = useState(false);
  const [coins, setCoins] = useState<any>([]);
  const dispatch = useDispatch();
  // const address = useSelector((state: any) => state.address);

  const handleSearch = async (e: any) => {
    // e.preventDefault();
    const address: string = e.target.value;
    // if (await lcdl.auth.accountInfo(address)) {
    //   setError(true);
    // }

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
      // const price = await lcdl.market.swapRate(offerCoin, 'uusd');
      // price_uusd = parseFloat(price.toData().amount) * 10 ** -6;
      let coin = { denom: val.denom, amount: fix};
      coinList.push(coin);
    }
    setCoins(coinList);
  };

  // if(val.denom !== 'uusd'){
  //   const offerCoin = new Coin(val.denom, val.amount);
  //   const price = await lcdl.market.swapRate(offerCoin, 'uusd');
  //   console.log(price);
  // }

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
          <CoinsHook coins={coins} />
          <Col></Col>
        </Row>
        {/* <Alert variant={'secondary'}>
          Verify if the address is correct ! It must start with 'terra'
        </Alert> */}
      </main>
    </Container>
  );
}
