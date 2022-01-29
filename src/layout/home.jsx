import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Container>
        <Helmet>
          <title>Ponderinho | Pond community </title>
        </Helmet>
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-lg-4">
              <h1 className="heading">
                Accelerating Decentralized Communication
              </h1>
              <p className="par">
                An open protocol that provides a <br /> high-performance
                programmable network infrastructure for DeFi and Web 3.0
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </Container>
    </>
  );
}
