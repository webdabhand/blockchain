import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import footerlogo from "../images/footer-logo.png";
import youtube from "../images/youtube.png";
import X from "../images/x.png";
import footersocial from "../images/footer-social.png";
import footersocial2 from "../images/footer-social2.png";
import git from "../images/git.png";
import teligram from "../images/teligram.png";
import enlogo from "../images/en-logo.png";
const page = () => {
  return (
    <div className="footer-contant">
      <Container>
        <Row>
          <Col lg={6}>
            <Image src={footerlogo} alt="/" />

            <h2>Managed by Solana Foundation</h2>
            <div className="social-link">
              <Image src={youtube} alt="/" />
              <Image src={X} alt="/" />
              <Image src={footersocial} alt="/" />
              <Image src={footersocial2} alt="/" />
              <Image src={git} alt="/" />
              <Image src={teligram} alt="/" />
            </div>
            <p> &copy; 2023 Solana Foundation. All rights reserved.</p>
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

            <div className="en-logo">
              <div>
                <Image src={enlogo} alt="/" />
              </div>
              <p>EN</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default page;
