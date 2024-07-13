import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import build2 from "../images/build2.png";
import backgroundimg from "../images/background-img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import changelog from "../images/changelog.png";

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
                <a href="#" className="btn btn-primary">
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
                <a href="#" className="btn btn-primary">
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
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="card-title">
          <Col lg={3}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TOOL / LIBRTARY</h5>
                <p className="card-text">
                  The official Solana documentation on developing, validators,
                  SPL tokens, wallets and more.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TOOL / LIBRTARY</h5>
                <p className="card-text">
                  The official Solana documentation on developing, validators,
                  SPL tokens, wallets and more.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TOOL / LIBRTARY</h5>
                <p className="card-text">
                  The official Solana documentation on developing, validators,
                  SPL tokens, wallets and more.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="card-title">
          <Col lg={3}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TOOL / LIBRTARY</h5>
                <p className="card-text">
                  The official Solana documentation on developing, validators,
                  SPL tokens, wallets and more.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TOOL / LIBRTARY</h5>
                <p className="card-text">
                  The official Solana documentation on developing, validators,
                  SPL tokens, wallets and more.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
        <div>
          <h1>Go to the source.</h1>
          <p>Read the documentation for Solana and popular tools.</p>
        </div>
        <Row className="build-docs">
          <Col lg={6}>
            <div className="build-solana-docs">
              <h1>Solana Docs</h1>
              <button>VIEW ALL</button>
            </div>
            <div>
              Learn how Solana works and get a high-level understanding of
              Solana's architecture.
            </div>
          </Col>
          <Col lg={6}>
            <div className="build-solana-docs">
              <h1>Metaplex Docs</h1>
              <button>VIEW ALL</button>
            </div>
            <div>
              Learn what you build with Metaplex, make the process of creating
              and launching NFTs easier.
            </div>
          </Col>
        </Row>
        <Row className="change-log">
          <Col lg={4}>
            <h1>Solana Changelog</h1>
            <p>
              Some more Solana changes from Jacob & Joe. Subscribe to the
              newsletter: https://solana.us17.list-manage.com/s... Proposal -
              Priced Compute Units: ...
            </p>
            <button>LATEST EPISODE</button>
          </Col>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Image src={changelog} alt="/" />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <h2>Solana Developer Update</h2>
            <p>
              Sign up to the newsletter and learn about new resources, new
              commits, new proposals, and more.
            </p>
          </Col>
          <Col lg={6}>
            <h2>Even more resources</h2>
            <p>
              More videos, more episodes. Discussions between industry leaders
              in both blockchain and technology, our team, and community
              developers.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default page;
