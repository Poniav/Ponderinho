import { Link } from "react-router-dom";
import Config from "../config.json";
import {
  Navbar,
  Container,
  Nav,
  NavItem,
  Badge,
  Button,
} from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Header() {
  const [data, setData] = useState(null);
  const [key, setKey] = useState(null);

  // useEffect(() => {
  //   if (Config & Config[0]["CMC_KEY"]) {
  //     const key = Config[0]["CMC_KEY"];
  //     setKey(key);
  //   }
  //   getPrice();
  // }, []);

  // const getPrice = async () => {
  //   const URL = `${}`;
  //   const options = {
  //     method: "GET",
  //     headers: new Headers({ "content-type": "application/json", "X-CMC_PRO_API_KEY": key }),
  //   };
  //   const response = await fetch(URL, options);
  //   const data = await response.json();
  //   if (response.ok) {
  //     return data.data[0];
  //   }
  // };

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
            <NavItem></NavItem>
            <Button variant="primary">Connect</Button>{" "}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
