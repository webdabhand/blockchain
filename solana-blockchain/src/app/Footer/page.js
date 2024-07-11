import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const page = () => {
  return (
    <div className="footer-contant">
      <Container>
        <Row>
          <Col lg={6}>
            <p>Managed by Solana Foundation</p>
            <p>2023 Solana Foundation. All rights reserved.</p>
          </Col>
          <Col lg={6} className="footer-contact">
            <div>
              <h2>SOLANA</h2>
              <p>Grants</p>
              <p>Break Solana</p>
              <p>Media Kit</p>
              <p>Careers</p>
              <p>Disclaimer</p>
            </div>

            <div>
              <h2>GET CONNEXTED</h2>
              <p>Ecosystem</p>
              <p>Blog</p>
              <p>newsletter</p>
            </div>

            <div>EN</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default page;
