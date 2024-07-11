import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import brave from "../app/images/brave.png";
import circle from "../app/images/circle.png";
import discord from "../app/images/discord.png";
import google from "../app/images/google.png";
import jump from "../app/images/jump.png";
import lalla from "../app/images/lalla.png";
import magic from "../app/images/magic.png";
import emoji4 from "../app/images/emoji4.png";
import build from "../app/images/build.png";
import emoji1 from "../app/images/emoji1.png";
import emoji2 from "../app/images/emoji2.png";
import emoji3 from "../app/images/emoji3.png";
import anybody from "../app/images/anybodies.png";
export default function Home() {
  return (
    <div className="main-page-background">
      <Container>
        <Row>
          <Col>
            <div className="main-page-contant">
              <h6>
                Powerful for developers <br />
                Fast for everyone.
              </h6>
              <p>
                Bring blockchain to the people. Solana supports experiences{" "}
                <br />
                for power users, new consumers, and everyone in between
              </p>
            </div>
            <div className="main-page-button">
              <button className="start-button"> START BUILDING</button>
              <button className="read-button">READ DOCS</button>
            </div>
            <div className="tools-heading">
              <p>
                Powering tools and integrations from companies all around the
                world
              </p>
            </div>
            <div className="company-patner">
              <Image src={brave} alt="/brave" />
              <Image src={circle} alt="/circle" />
              <Image src={discord} alt="/discord" />
              <Image src={google} alt="/google" />
              <Image src={jump} alt="/jump" />
              <Image src={lalla} alt="/lalla" />
              <Image src={magic} alt="/magic" />
            </div>
          </Col>
        </Row>
        <Row className="millions">
          <Col lg={6}>
            <h3>
              Join a community <br /> of millions.
            </h3>
          </Col>
          <Col lg={6}>
            <h1>11.5M+</h1>
            <p> ACTIVE ACCOUNTS</p>
            <h1>21.9M</h1>
            <p>NFTS MINTED</p>
            <h1>$0.00025</h1>
            <p>AVERAGE COST PER TRANSACTION</p>
          </Col>
        </Row>
      </Container>
      <div className="mass-section">
        <Container>
          <Row>
            <Col lg={4}>
              <h1> Made for </h1>
              <h1>mass adoption.</h1>
              <p>LIVE DATA</p>
            </Col>
            <Col lg={4}>
              <h1>Fast</h1>
              <p>
                Don't keep your users waiting. Solana has block times of 400
                milliseconds - and as hardware gets faster, so will the network.
              </p>
              <h1>3969</h1>
              <p>TRANSACTIONS PER SECOND</p>
              <h1>Scalable</h1>
              <p>
                Get big, quick. Solana is made to handle thousands of
                transactions per second, and fees for both developers and users
                remain less than $0.01.
              </p>
              <h1>169,077,581,394</h1>
              <p>TOTAL TRANSACTIONS</p>
            </Col>
            <Col lg={4}>
              <h1>Decentralized</h1>
              <p>
                The Solana network is validated by thousands of nodes that
                operate independently of each other, ensuring your data remains
                secure and censorship resistant.
              </p>
              <h1>1,675 </h1>
              <p>VALIDATOR NODES</p>
              <h1>Energy Efficient</h1>
              <p>
                Solana's proof of stake network and other innovations minimize
                its impact on the
                <span className="environment">environment.</span> Each Solana
                transaction uses about the same energy as a few Google searches.
              </p>
              <h1>0%</h1>
              <p>NET CARBON IMPACT</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="payment-mode">
              <div>
                <h1>Build for growth.</h1>
              </div>
              <div>
                <button>NFTs</button>
                <button>DoFi</button>
                <button>Payment</button>
                <button>Gaming</button>
                <button>DAOs</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={6}>
            <Image src={build} alt="/build" />
          </Col>
          <Col lg={6}>
            <Image src={emoji4} alt="/emoji4" />
            <p>
              It's time to bridge the digital and physical. Anybodies helps
              established brands like Toys'R'Us connect real-life places and
              products with NFTs.
            </p>
            <span className="more-about">Learn more about NFTs on Solana</span>
          </Col>
        </Row>
        <Row>
          <Col className="emoji">
            <Image src={anybody} alt="/anybody" />
            <Image src={emoji1} alt="/emoji4" />
            <Image src={emoji2} alt="/emoji4" />
            <Image src={emoji3} alt="/emoji4" />
          </Col>
        </Row>
        <div className="join-line">
          <p>Join a thriving community</p>
        </div>
      </Container>
    </div>
  );
}
