import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  return (
    <>
      <div className="featured card swiper-slide">
        <img src={props.url} className="card-img-top" alt="..." />

        <div className="card-body text-center">
          <h5 className="card-title fw-bold p-1">{props.name}</h5>
          <p className="price fw-semibold h5">₹ {props.price}</p>
          <p className="card-text">{props.description}</p>
          <button className="add-cart d-flex align-items-center">
            <FontAwesomeIcon icon={faCartShopping} className=".add-to-cart" />
            <Link className="btn fw-bold">
              Add To Cart
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
