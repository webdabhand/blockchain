"use client";
import { useState } from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Image from "next/image";
import logo from "../images/solanaimage3.png";

const page = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="header">
        Breakpoint 2023 - New City. New Vibes - Get Early Access -
      </div>
      <div className="header-navbar">  
        <Image src={logo} alt="/logo" />
        <Navbar
          expanded={expanded}
          expand="lg"
          variant="dark"
          sticky="top"
          className="shadow-sm"
        >
          <Container>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(expanded ? false : true)}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} href="/" onClick={() => setExpanded(false)}>
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/Build"
                  onClick={() => setExpanded(false)}
                >
                  Build
                </Nav.Link>
                <NavDropdown title="   Network" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    href="/services/web-development"
                    onClick={() => setExpanded(false)}
                  >
                    Web Development
                  </NavDropdown.Item> 
                  <NavDropdown.Item
                    as={Link}
                    href="/services/mobile-development"
                    onClick={() => setExpanded(false)}
                  >
                    Mobile Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/services/seo"
                    onClick={() => setExpanded(false)}
                  >
                    SEO
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Community" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    href="/services/web-development"
                    onClick={() => setExpanded(false)}
                  >
                    Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/services/mobile-development"
                    onClick={() => setExpanded(false)}
                  >
                    Mobile Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/services/seo"
                    onClick={() => setExpanded(false)}
                  >
                    SEO
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default page;
