import React from "react";
import "./Categories.scss";
import CategoryItem from "../categoryItem/CategoryItem";
import { categories } from "../../data";
function Categories() {
  console.log(categories);
  return (
    <div className="categories">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Categories;
