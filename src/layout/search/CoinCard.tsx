import { Col } from 'react-bootstrap';

interface IconProps {
  icon?: string;
}

interface Coin {
  denom: string;
  amount: number;
  uusd?: number;
}

interface PropsCWallet {
  coins: Coin[];
}

const Icon = (props: IconProps) => {
  if (props.icon) {
    const icon = props.icon.toUpperCase().substring(1);
    return (
      <>
        <img src={require('../../assets/icons/stable/' + icon + '.png')} alt={props.icon} height={24} width={24}/>
      </>
    );
  }
  return null;
};

const CoinCard = (props: PropsCWallet) => {
  return (
    <Col>
      <h3 style={{ color: 'white', fontWeight: '700', fontSize: '18px' }}>
        Coins
      </h3>
      {props.coins.map((coin: Coin) => {
        return (
          <div key={coin.denom} className="coin" style={{ color: 'white' }}>
            <div className="coin-img">
              <Icon icon={coin.denom} />
            </div>
            <div className="denom" style={{fontWeight:'bold'}}>{coin.denom.toUpperCase()}</div>
            <Col>
              <div className="count">{coin.amount}</div>
              <div className='usd'>{coin?.uusd}</div>
            </Col>
          </div>
        );
      })}
    </Col>
  );
};

export default CoinCard;
