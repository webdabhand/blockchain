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
import frame from "../app/images/Frame.png";
import frame1 from "../app/images/Frame1.png";
import frame2 from "../app/images/Frame2.png";
import frame3 from "../app/images/Frame3.png";
import frame4 from "../app/images/Frame4.png";
import frame5 from "../app/images/Frame5.png";
import frame6 from "../app/images/Frame6.png";
import frame7 from "../app/images/Frame7.png";
import background from "../app/images/solana-background3.png";
export default function Home() {
  return (
    <div className="main-page-background">
      <div>
        <div className="background-img-left">
          <Image src={background} alt="/background" />
        </div>

        <div className="background-img-right"></div>
        <Container>
          <Row>
            <Col>
              <div className="main-page-contant">
                <h6>
                  Powerful for developers <br />
                  Fast for everyone.
                </h6>
                <p>
                  Bring blockchain to the people. Solana supports experiences
                  <br />
                  for power users, new consumers, and everyone in between
                </p>
              </div>
              <div className="main-page-button">
                <button className="start-button"> START BUILDING</button>
                <button className="read-button">READ DOCS</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
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
              <p className="mass-section-live"> LIVE DATA</p>
            </Col>
            <Col lg={4}>
              <div className="mass-section-text">
                <h1>Fast</h1>
                <p>
                  Don't keep your users waiting. Solana has block times of 400
                  milliseconds - and as hardware gets faster, so will the
                  network.
                </p>
                <h2>3969</h2>
                <p>TRANSACTIONS PER SECOND</p>
              </div>
              <div className="mass-section-text2">
                <h1>Scalable</h1>
                <p>
                  Get big, quick. Solana is made to handle thousands of
                  transactions per second, and fees for both developers and
                  users remain less than $0.01.
                </p>
                <h1>169,077,581,394</h1>
                <p>TOTAL TRANSACTIONS</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="Decentralized-text">
                <h1>Decentralized</h1>
                <p>
                  The Solana network is validated by thousands of nodes that
                  operate independently of each other, ensuring your data
                  remains secure and censorship resistant.
                </p>
                <h2>1,675 </h2>
                <p>VALIDATOR NODES</p>
              </div>
              <div className="Decentralized-text2">
                <h1>Energy Efficient</h1>
                <p>
                  Solana's proof of stake network and other innovations minimize
                  its impact on the
                  <span className="environment">environment.</span> Each Solana
                  transaction uses about the same energy as a few Google
                  searches.
                </p>
                <h2>0%</h2>
                <p>NET CARBON IMPACT</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col className="payment-mode">
            <div>
              <h1>Build for growth.</h1>
            </div>
            <div className="payment-mode-group">
              <div>
                <button className="Nft-btn">NFTs</button>
              </div>
              <div>
                <button>DoFi</button>
              </div>
              <div>
                <button>Payments</button>
              </div>
              <div>
                <button>Gaming</button>
              </div>
              <div>
                <button>DAOs</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={6} className="build-image">
            <Image src={build} alt="/build" />
          </Col>
          <Col lg={6} className="anybodies">
            <Image src={emoji4} alt="/emoji4" />
            <p>
              It's time to bridge the digital and physical. Anybodies <br />
              helps established brands like Toys'R'Us connect real-life <br />
              places and products with NFTs.
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
      <div>
        <div className="community">
          <div>
            <div>
              <Image src={frame} alt="/" />
            </div>
            <div>
              <Image src={frame1} alt="/" />
            </div>
          </div>
          <div>
            <Image src={frame2} alt="/" />
          </div>
          <div>
            <div>
              <Image src={frame3} alt="/" />
            </div>
            <div>
              <Image src={frame4} alt="/" />
            </div>
          </div>
          <div>
            <Image src={frame5} alt="/" />
          </div>
          <div>
            <div>
              <Image src={frame6} alt="/" />
            </div>
            <div>
              <Image src={frame7} alt="/" />
            </div>
          </div>
        </div>
      </div>

      <Container>
        <Row>
          <Col className="start-building">
            <h1>
              It's time to join the thousands of creators, <br />
              Artists, and developers using solana.
            </h1>
            <button>START BUILDING</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
