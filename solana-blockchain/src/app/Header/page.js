import React from "react";
import Image from "next/image";
import logo from "../images/solanaimage3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/page.js";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="header">
        Breakpoint 2023 - New City. New Vibes - Get Early Access -
      </div>
      <div className="header-nnavbar">
        <div className="header-navbar">
          <Image src={logo} alt="/logo" />
        </div>
        <div>
          {/* <nav classNameName="navbar navbar-expand-lg navbar-light text-white ">
            <a classNameName="navbar-brand" href="#"></a>
            <button
              classNameName="navbar-toggler text-white navbar-icon "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span classNameName="navbar-toggler-icon " />
            </button>

            <div
              classNameName="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul classNameName="navbar-nav mr-auto">
                <li classNameName="nav-item active">
                  <a classNameName="nav-link" href="#">
                    Learn
                  </a>
                </li>
                <li classNameName="nav-item">
                  <a classNameName="nav-link" href="/Build">
                    Build
                  </a>
                </li>

                <li classNameName="nav-item dropdown">
                  <a
                    classNameName="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Network
                  </a>
                  <div
                    classNameName="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a classNameName="dropdown-item" href="#">
                      Action
                    </a>
                    <a classNameName="dropdown-item" href="#">
                      Another action
                    </a>
                    <div classNameName="dropdown-divider"></div>
                    <a classNameName="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li classNameName="nav-item dropdown">
                  <a
                    classNameName="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Community
                  </a>
                  <div
                    classNameName="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a classNameName="dropdown-item" href="#">
                      Action
                    </a>
                    <a classNameName="dropdown-item" href="#">
                      Another action
                    </a>
                    <a classNameName="dropdown-item" href="#">
                      Another action
                    </a>
                    <div classNameName="dropdown-divider"></div>
                    <a classNameName="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav> */}
          <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
            <div className="wrapper"></div>
            <div className="container-fluid all-show">
              <Link className="navbar-brand" href="/">
                Home <i className="fa fa-codepen"></i>
              </Link>
              <button
                className="navbar-toggler dropdown-toggle"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/Build"
                    >
                      Build
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Network
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Events
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link className="nav-link " href="/">
                      contact
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Page;
