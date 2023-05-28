import React from "react";
import "./CategoryItem.scss";
import { Link } from "react-router-dom";
function CategoryItem({ item }) {
  console.log(item);
  return (
    <div className="categoryItem">
      <img src={item.img} alt="img" />
      <div className="info">
        <h1>{item.id}</h1>
        <Link to={`/Products/${item.id}`}>
          <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
