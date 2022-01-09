import { Link } from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
  NavItem,
  Badge,
  Button,
} from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#home">
              {/* <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "} */}
              Ponderinho
            </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            {/* <Nav.Link>Home</Nav.Link> */}
            <Link
              to="/academy"
              style={{ textDecoration: "none", marginRight: "10px" }}
            >
              <NavItem>Academy</NavItem>
            </Link>
            <Link to="/game" style={{ textDecoration: "none" }}>
              <NavItem>Game</NavItem>
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <NavItem>
              <Nav.Link href="/">
                <Badge bg="primary">Primary</Badge>{" "}
                <Badge bg="secondary">Secondary</Badge>{" "}
              </Nav.Link>
            </NavItem>
            <Button variant="primary">Connect</Button>{" "}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
