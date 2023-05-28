import React from "react";
import "./Product.scss";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaSearchengin } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
function Product({ item }) {
  return (
    <div className="product">
      <div className="circle">
        <img src={item.img} alt="" />
      </div>

      <div className="info">
        <div className="icon">
          <HiOutlineShoppingCart />
        </div>
        <div className="icon">
          <Link to={`/product/${item._id}`}>
            <FaSearchengin />
          </Link>
        </div>
        <div className="icon">
          <MdOutlineFavoriteBorder />
        </div>
      </div>
    </div>
  );
}

export default Product;
