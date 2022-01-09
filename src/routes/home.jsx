import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}
