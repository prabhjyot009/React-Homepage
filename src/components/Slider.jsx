import React from "react";
import "./css/Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const productData = [
  {
    id: 1,
    imageUrl: "https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg",
    name: "Black T-shirt",
    price: 659,
    description:
      "Allen Solly Men's Plain Regular Fit Polo T-shirt, available in all sizes",
  },
  {
    id: 2,
    imageUrl: "https://m.media-amazon.com/images/I/61XnG8ZA3lL._AC_UL320_.jpg",
    name: "Floral Pink Dress",
    price: 1439,
    description: "Women's Polyester comfortable A-Line Knee-Length",
  },
  {
    id: 3,
    imageUrl: "https://m.media-amazon.com/images/I/8129Xn87GsL._AC_UL320_.jpg",
    name: "Formal Suit",
    price: 4159,
    description:
      "Wool Blend Unisex Full Sleeve Slim FIT Medium Blue Formal Suit",
  },
  {
    id: 4,
    imageUrl:
      "https://m.media-amazon.com/images/I/51NZaOmbZAL._SX679._SX._UX._SY._UY_.jpghttps://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg",
    name: "Pyjama-Tshirt set",
    price: 549,
    description:
      "Printed Bear Cartoon, Baby Clothing Set Stripe Pyjama Tshirt Pant",
  },
  {
    id: 5,
    imageUrl: "https://m.media-amazon.com/images/I/51mF7diIunL._UX679_.jpg",
    name: "Cotton Hoodie",
    price: 999,
    description: "Alan Jones Clothing, Colorblocked Unisex Hoodies Sweatshirt",
  },
  {
    id: 6,
    imageUrl: "https://m.media-amazon.com/images/I/61kqhTCKtgL._AC_UL320_.jpg",
    name: "Baby Flannel",
    price: 664,
    description: "BRANDONN Unisex Baby Flannel Jumpsuit Panda Style Cosplay.",
  },
  {
    id: 7,
    imageUrl: "https://m.media-amazon.com/images/I/61ZG-r4cGHL._SX466_.jpg",
    name: "Surgicals Suit",
    price: 714,
    description:
      "Surgicals Scrub Suit set V-Neck Pocket Top and Cargo Type Trouser",
  },
  {
    id: 8,
    imageUrl: "https://m.media-amazon.com/images/I/71lOb02ErwL._UY741_.jpg",
    name: "Kurta Palazzo set",
    price: 1647,
    description: "Miss Ethnik Women's Faux Georgette Top With Stitched Faux",
  },
  {
    id: 9,
    imageUrl:
      "https://m.media-amazon.com/images/I/31IDm87JoTS._SX300_SY300_QL70_FMwebp_.jpg",
    name: "Face Mask",
    price: 199,
    description:
      "Lee Cooper Lightweight Cotton Face Mask for Outdoor Protection.",
  },
  {
    id: 10,
    imageUrl: "https://m.media-amazon.com/images/I/41hTiBWvtDL.jpg",
    name: "Checked Skirt",
    price: 1249,
    description:
      "Black Checked Front Knot, Buttoned, Below Knee Length, a- line Skirt",
  },
];


const products = productData.map((item) => {
  return (
    <Product
      key={item.id}
      name={item.name}
      url={item.imageUrl}
      price={item.price}
      description={item.description}
    />
  );
});

const Slider = () => {
  return (
    <>
      <h2 className="fw-bolder py-3 px-5">Featured Products:</h2>
      <Carousel responsive={responsive} className=".slide-container mb-4" style>
        {products}
      </Carousel>
    </>
  );
};

export default Slider;
