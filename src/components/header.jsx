import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavItem, Button } from 'react-bootstrap';
import { Context } from './wrapper';
import { useContext } from 'react';
import styled from 'styled-components';
import Logo from '../assets/icons/stable/LUNA.png';

export const ItemNav = styled(NavItem)`
  color: rgb(74, 85, 127)
  &:active {
    color: #ffffff;
  }
  &:hover {
    color: rgb(134, 143, 176);
  }
`;

export default function Header() {
  const context = useContext(Context);
  return (
    <>
      <Navbar
        style={{
          backgroundColor: '#131a35',
          borderBottom: '2px solid #1c274f',
          marginBottom: '25px',
        }}
        variant="dark"
      >
        <Container fluid>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand>
              <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
                LunaApp
              </span>
            </Navbar.Brand>
          </Link>
          <Container>
            <Nav className="me-auto justify-content-center">
              <Link
                to="/prices"
                style={{ textDecoration: 'none', marginRight: '20px' }}
              >
                <NavItem style={{ color: 'rgb(74, 85, 127)' }}>Prices</NavItem>
              </Link>
              <Link
                to="/vault"
                style={{ textDecoration: 'none', marginRight: '20px' }}
              >
                <NavItem style={{ color: 'rgb(74, 85, 127)' }}>Vault</NavItem>
              </Link>
              <Link
                to="/wallet"
                style={{ textDecoration: 'none', marginRight: '20px' }}
              >
                <NavItem style={{ color: 'rgb(74, 85, 127)' }}>Wallet</NavItem>
              </Link>
              <Link
                to="/api"
                style={{ textDecoration: 'none', marginRight: '20px' }}
              >
                <ItemNav>API</ItemNav>
              </Link>
            </Nav>
          </Container>
          <Nav className="ms-auto">
            {/* <NavItem>
              <select value={context.locale} onChange={context.selectLanguage}>
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
            </NavItem> */}
            <Button variant="primary">Connect</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
