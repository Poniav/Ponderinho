import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
  NavItem,
  Badge,
  Button,
} from 'react-bootstrap';
import { Context } from './wrapper';
import { useEffect, useState, useContext } from 'react';

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
              {/* <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "} */}
              <span style={{ fontWeight: 'bold' }}>LunaApp</span>
            </Navbar.Brand>
          </Link>
          <Container>
            <Nav className="me-auto">
              <Link
                to="/academy"
                style={{ textDecoration: 'none', marginRight: '10px' }}
              >
                <div style={{ color: '#414e7b' }}>Academy</div>
              </Link>
              <Link to="/wallet" style={{ textDecoration: 'none' }}>
                <NavItem>Wallet</NavItem>
              </Link>
            </Nav>
          </Container>
          <Nav className="ms-auto">
            <NavItem>
              <select value={context.locale} onChange={context.selectLanguage}>
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
            </NavItem>
            <Button variant="primary">Connect</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
