import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import build2 from "../images/build2.png";
import backgroundimg from "../images/background-img.png";
import "bootstrap/dist/css/bootstrap.min.css";

const page = () => {
  return (
    <div className="build-page">
      <Container>
        <Row>
          <Col lg={6}>
            <h1>
              Developer <br />
              Resources
            </h1>
            <p>
              A manual for joining the Solana ecosystem. By builders for
              builders.
            </p>
            <div className="build-btn">
              <button className="build-now">BUILD NOW</button>
              <button>STACK EXCHANGE </button>
            </div>
          </Col>
          <Col lg={6} className="build-page-background">
            <Image src={build2} alt="/build2" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Get started</h1>
            <p>
              Use these Solana Foundation and community courses to begin your
              journey into Solana development.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="backgroundimg">
            <Image src={backgroundimg} alt="/" />
            <div>
              <h3>Solana Devlopment Course</h3>
              <p>
                Quickstart your Solana development starting from nothing to
                complex programs.
              </p>
            </div>
            <h1>Dig deeper.</h1>
            <p>Learn from resources across the greater Solana ecosystem.</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="card-title">
          <Col lg={3}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TOOL / LIBRTARY</h5>
                <p className="card-text">
                  The official Solana documentation on developing, validators,
                  SPL tokens, wallets and more.
                </p>
                <a href="#" class="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TOOL / LIBRTARY</h5>
                <h3>Core Documentation</h3>
                <p className="card-text">
                  The Solana Cookbook is a developer resource that provides the
                  essential concepts and references for building applications on
                  Solana.
                </p>
                <a href="#" class="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3} className="cards">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TOOL / LIBRTARY</h5>
                <p className="card-text">
                  Solana Stack Exchange is a question and answer site for Solana
                  software users and developers.
                </p>
                <a href="#" class="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div>
              <h1>Go to the source.</h1>
              <p>Read the documentation for Solana and popular tools.</p>
            </div>
            <div>
              <h1>Solana Docs</h1>
              <button>VIEW ALL</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default page;
