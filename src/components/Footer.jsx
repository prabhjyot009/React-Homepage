import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-center text-white">
      <div className="container p-4">
        <section>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>
                <Link
                  className="text-decoration-none text-white h4"
                  
                >
                  Women
                </Link>
              </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="text-white">
                    Dresses
                  </Link>
                </li>
                <li>
                  <Link className="text-white">
                    Pants
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white"
                  >
                    Skirts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>
                <Link
                  className="text-decoration-none text-white h4"
                >
                  Men
                </Link>
              </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="text-white">
                    Shirts
                  </Link>
                </li>
                <li>
                  <Link className="text-white">
                    Pants
                  </Link>
                </li>
                <li>
                  <Link className="text-white">
                    Hoodies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>
                <Link
                  className="text-decoration-none text-white h4"
                  
                >
                  kids
                </Link>
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="h4">Links</p>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* Copyright text section  */}
      <div className="text-center p-3">
        <hr />
        Copyright ©E-Store 2022-2023
      </div>
    </footer>
  );
};

export default Footer;
