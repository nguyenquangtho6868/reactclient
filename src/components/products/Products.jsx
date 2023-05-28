import React from "react";
import "./Products.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import Product from "../product/Product";
function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://project-clien.onrender.com/api/product?category=${cat}`
            : "https://project-clien.onrender.com/api/product"
        );

        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  console.log(sort);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  console.log(filteredProducts.map((e) => e.price));
  return (
    <div className="products">
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;
