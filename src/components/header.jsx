import React from "react";
import { Contact, Ukrainelogo } from "../shared/image";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
export default function Header({
  scrolltosection,
  aboutref,
  foodref,
  shelterref,
}) {
  const history = useHistory();
  const abouttogo = () => {
    history.push("/Home#Aboutus");
  };
  const foodtogo = () => {
    history.push("/Home#Food");
  };
  const sheltertogo = () => {
    history.push("/Home#Shelter");
  };
  return (
    <div className="header-bg">
      <nav className="navbar navbar-expand-lg  container">
        <div className="container-fluid">
          <Link className="navbar-logo ms-3" to="/">
            <img src={Ukrainelogo} alt="" />
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  */}

          <HiMenu
            color="#fff"
            className="menu-icon"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            fontSize={30}
          />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-links-margin  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName=" active"
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item" onClick={abouttogo}>
                <Link to="#Aboutus" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item" onClick={foodtogo}>
                <Link to="#Food" className="nav-link">
                  Food
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={sheltertogo}
                // onClick={() => scrolltosection(shelterref)}
              >
                <Link to="#Shelter" className="nav-link">
                  Shelter
                </Link>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName=" active"
                  to="/Contact"
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
            <div className="help-btn-div">
              <button className="help-btn ms-auto">I want to Help</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
