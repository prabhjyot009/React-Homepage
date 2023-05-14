import React from "react";
import "./css/Header.css";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        {/* First part of header */}
        <nav className="navbar navbar-inverse p-2">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="" srcSet="" className="logo" />
              </Link>
            </div>
            <form className="navbar-form navbar-left d-flex">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search clothes"
                  name="search"
                />
              </div>
              <button type="button" className="btn btn-warning">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
            <ul className="nav gap-4 navbar-right d-flex align-items-center">
              <li>
                <button className="login d-flex align-items-center rounded-3">
                  <Link to="/" className="btn fw-bold">
                    Login
                  </Link>
                </button>
              </li>
              <li>
                <Link className="text-decoration-none">
                  <div className="cart">
                    <FontAwesomeIcon icon={faCartShopping} className="cart" />

                    <span
                      className="cart-number fw-bold text-black rounded-circle p-1"
                      id="total__counter"
                    >
                      0
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Second Part of header / Navigation Bar */}
        <ul className="navigation-bar nav justify-content-center fw-semibold">
          <li className="nav-item">
            <Link
              className="nav-link text-black"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" >
              All products
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link text-black dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              Women
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item">
                  All
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  
                >
                  Dresses
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                >
                  Pants
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                >
                  Skirts
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link text-black dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              Men
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" >
                  All
                </Link>
              </li>
              <li>
                <Link className="dropdown-item">
                  Shirts
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" >
                  Pants
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" >
                  Hoodies
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black">
              Kids
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
