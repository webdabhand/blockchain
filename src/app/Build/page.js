import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import build2 from "../images/build2.png";
import backgroundimg from "../images/background-img.png";
import changelog from "../images/changelog.png";
import buildspace1 from "../images/buildspace1.png";
import buildspace2 from "../images/buildspace2.png";
import buildspace3 from "../images/buildspace3.png";
import buildspace4 from "../images/buildspace4.png";
import buildspace5 from "../images/buildspace5.png";
import buildspace6 from "../images/buildspace6.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import youtube from "../images/youtube-icons.png";
import podcast from "../images/Podcast.png";
import exchange from "../images/exchange.png";
import { GoArrowUpRight } from "react-icons/go";
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
              <button className="stack">
                STACK EXCHANGE
                <Image src={exchange} alt="/" />
              </button>
            </div>
          </Col>
          <Col lg={6} className="build-page-background">
            <Image src={build2} alt="/build2" />
          </Col>
        </Row>
        <Row className="get-started">
          <Col>
            <h1>Get started</h1>
            <p>
              Use these Solana Foundation and community courses to begin your
              journey into Solana development.
            </p>
          </Col>
        </Row>
        <Row className="backgroundimg">
          <Col>
            <div>
              <Image src={backgroundimg} alt="/" />
            </div>
            <div className="build-image-text">
              <button>17 Chapters</button>
              <h1>Solana Devlopment Course</h1>
              <p>
                Quickstart your Solana development starting <br />
                from nothing to complex programs.
              </p>
              <IoArrowForwardCircleOutline className="circle-arrow" />
            </div>
          </Col>
        </Row>
        <Row className="buildspace-three-background">
          <Col>
            <div className="chapter-main-div">
              <div className=" chapter-buildspacce">
                <div className="buildspace1-image">
                  <Image src={buildspace1} alt="/" />
                </div>
                <div className="chapter-buildspacce-text">
                  <div>
                    <button>14 Chapters</button>
                    <p>Buildspace</p>
                  </div>
                  <div>
                    <IoArrowForwardCircleOutline className="circle-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="chapter-main-div">
              <div className="chapter-main-div">
                <div className=" chapter-buildspacce">
                  <Image src={buildspace2} alt="/" />
                  <div className="chapter-buildspacce-text">
                    <div>
                      <button>12 Chapters</button>
                      <p>Solana Bytes</p>
                    </div>
                    <div>
                      <IoArrowForwardCircleOutline className="circle-arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="chapter-main-div">
              <div className="chapter-main-div">
                <div className="chapter-buildspacce">
                  <Image src={buildspace3} alt="/" />
                  <div className="chapter-buildspacce-text">
                    <div>
                      <button>1 Chapters</button>
                      <p> Scaffold Series</p>
                    </div>
                    <div>
                      <IoArrowForwardCircleOutline className="circle-arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="chapter-main-div">
              <div className="chapter-buildspacce">
                <Image src={buildspace4} alt="/" />
                <div className="chapter-buildspacce-text">
                  <div>
                    <button>3 Chapters</button>
                    <p>Freecodecamp Solana Course</p>
                  </div>
                  <div>
                    <IoArrowForwardCircleOutline className="circle-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="chapter-main-div">
              <div className="chapter-buildspacce">
                <Image src={buildspace5} alt="/" />
                <div className="chapter-buildspacce-text ">
                  <div>
                    <button>167 Chapters</button>
                    <p>Solana Devlopment by Knox</p>
                  </div>
                  <div>
                    <IoArrowForwardCircleOutline className="circle-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="chapter-main-div">
              <div className="chapter-buildspacce">
                <Image src={buildspace6} alt="/" />
                <div className="chapter-buildspacce-text">
                  <div>
                    <button>8 Chapters</button>
                    <p> solana Bootcamp</p>
                  </div>
                  <div>
                    <IoArrowForwardCircleOutline className="circle-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div>
          <h1>Dig deeper.</h1>
          <p>Learn from resources across the greater Solana ecosystem.</p>
        </div>
        <Row className="card-title buildspace-three-background">
          <Col>
            <div className="chapter-main-div">
              <div className="card edit-card">
                <div className="card-body">
                  <p className="card-titles">TOOL / LIBRTARY</p>
                  <p>Core Documentation</p>
                  <p className="card-text">
                    The official Solana documentation on developing, validators,
                    SPL tokens, wallets and more.
                  </p>
                  <p href="#" className=" btnn-primary ">
                    Learn more <GoArrowUpRight className="arrow-right" />
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="chapter-main-div">
              <div className="card edit-card">
                <div className="card-body">
                  <p className="card-titles">TOOL / LIBRTARY</p>
                  <p>Solana Cookbook</p>
                  <p className="card-text">
                    The Solana Cookbook is a developer resource that provides
                    the essential concepts and references for building
                    applications on Solana.
                  </p>
                  <p href="#" className=" btnn-primary ">
                    Learn more <GoArrowUpRight className="arrow-right" />
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="cards">
            <div className="chapter-main-div">
              <div className="card edit-card">
                <div className="card-body">
                  <p className="card-titles">TOOL / LIBRTARY</p>
                  <p>Solana Stack Exchange</p>
                  <p className="card-text">
                    Solana Stack Exchange is a question and answer site for
                    Solana software users and developers.
                  </p>
                  <p href="#" className=" btnn-primary ">
                    Learn more <GoArrowUpRight className="arrow-right" />
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="chapter-main-div">
              <div className="card edit-card">
                <div className="card-body">
                  <p className="card-titles">TOOL / LIBRTARY</p>
                  <p>Solana Playground</p>
                  <p className="card-text">
                    The official Solana documentation on developing, validators,
                    SPL tokens, wallets and more.
                  </p>
                  <p href="#" className=" btnn-primary ">
                    Learn more <GoArrowUpRight className="arrow-right" />
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="chapter-main-div">
              <div className="card edit-card">
                <div className="card-body">
                  <p className="card-titles">TOOL / LIBRTARY</p>
                  <p>create-solana-dapp</p>
                  <p className="card-text">
                    The official Solana documentation on developing, validators,
                    SPL tokens, wallets and more.
                  </p>
                  <p href="#" className=" btnn-primary ">
                    Learn more <GoArrowUpRight className="arrow-right" />
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="chapter-main-div">
              <div className="card edit-card">
                <div className="card-body">
                  <p className="card-titles">TOOL / LIBRTARY</p>
                  <p>Anchor Docs</p>
                  <p className="card-text">
                    The official Solana documentation on developing, validators,
                    SPL tokens, wallets and more.
                  </p>
                  <p href="#" className=" btnn-primary ">
                    Learn more <GoArrowUpRight className="arrow-right" />
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="chapter-main-div">
              <div className="card edit-card">
                <div className="card-body">
                  <p className="card-titles">TOOL / LIBRTARY</p>
                  <p>Solana Program Library</p>
                  <p className="card-text">
                    The official Solana documentation on developing, validators,
                    SPL tokens, wallets and more.
                  </p>
                  <p href="#" className=" btnn-primary ">
                    Learn more <GoArrowUpRight className="arrow-right" />
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="chapter-main-div">
              <div className="card edit-card">
                <div className="card-body">
                  <p className="card-titles">TOOL / LIBRTARY</p>
                  <p>Program Examples</p>
                  <p className="card-text">
                    The official Solana documentation on developing, validators,
                    SPL tokens, wallets and more.
                  </p>
                  <p href="#" className="btnn-primary">
                    Learn more <GoArrowUpRight className="arrow-right" />
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="card-blank-col"></Col>
        </Row>
      </Container>
      <div className="tools-section">
        <Container>
          <Row className="build-docs  buildspace-three-background">
            <div className="solana-tools">
              <h1>Go to the source.</h1>
              <p>Read the documentation for Solana and popular tools.</p>
            </div>
            <Col className="view-all-section">
              <div className="build-solana-docs">
                <h1>Solana Docs</h1>
                <button>
                  VIEW ALL <GoArrowUpRight className="arrow-right" />
                </button>
              </div>
              <div className="learn-line">
                Learn how Solana works and get a high- <br />
                level understanding of Solana's architecture.
              </div>
            </Col>
            <Col className="view-all-section">
              <div className="build-solana-docs">
                <h1>Metaplex Docs</h1>
                <button>
                  VIEW ALL <GoArrowUpRight className="arrow-right" />
                </button>
              </div>
              <div className="learn-line">
                Learn what you build with Metaplex, make the process <br /> of
                creating and launching NFTs easier.
              </div>
            </Col>
          </Row>
          <Row className="change-log  buildspace-three-background">
            <Col>
              <div className=" more-changelog">
                <h1>Solana Changelog</h1>
                <p>
                  Some more Solana changes from Jacob & Joe. Subscribe to the
                  newsletter: https://solana.us17.list-manage.com/s... Proposal
                  - Priced Compute Units: ...
                </p>
                <button>LATEST EPISODE</button>
              </div>
            </Col>
            <Col className="change-log-image">
              <Image src={changelog} alt="/" />
            </Col>
          </Row>
          <Row className="resources  buildspace-three-background">
            <Col>
              <div className="resources-colum">
                <h2>Solana Developer Update</h2>
                <p>
                  Sign up to the newsletter and learn about new resources, new
                  commits, new proposals, and more.
                </p>
                <form>
                  <div className="form-group email-edit">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                    <div className="submit-button">
                      <button type="submit" className="btn btn-primary submit">
                        SIGN UP
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <Col>
              <div className=" resources-colum ">
                <h2>Even more resources</h2>
                <p>
                  More videos, more episodes. Discussions between industry
                  leaders in both blockchain and technology, our team, and
                  community developers.
                </p>
                <div className="social-button">
                  <div>
                    <button>
                      YOUTUBE
                      <Image src={youtube} alt="/" />
                    </button>
                  </div>
                  <div>
                    <button>
                      PODCAST
                      <Image src={podcast} alt="/" />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default page;
