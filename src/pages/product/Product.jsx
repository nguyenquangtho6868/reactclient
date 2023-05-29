import React from "react";
import "./Product.scss";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import { MdRemoveCircle, MdOutlineAddCircle } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("red");
  const [size, setSize] = useState("free");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  console.log(size, color);
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <div className="imgContainer">
          <img src={product.img} alt="" />
        </div>
        <div className="info">
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <span>$ {product.price}</span>
          <div className="filterContainer">
            <div className="filter">
              <span>Color</span>
              {product.color?.map((c) => (
                <div
                  className="filterColor"
                  style={{ backgroundColor: `${c}`, cursor: "pointer" }}
                />
              ))}
              <select onChange={(c) => setColor(c.target.value)}>
                {product.color?.map((c) => (
                  <option
                    className="filterColor"
                    style={{ color: `${c}`, cursor: "pointer" }}
                  >
                    {c}
                  </option>
                ))}
              </select>

              <div className="filter">
                <span>Size</span>
                <select onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((s) => (
                    <option>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="addContainer">
              <div className="amountContainer">
                <MdRemoveCircle
                  style={{ fontSize: "40px" }}
                  onClick={() => handleQuantity("dec")}
                />
                <span>{quantity}</span>
                <MdOutlineAddCircle
                  style={{ fontSize: "40px" }}
                  onClick={() => handleQuantity("inc")}
                />
              </div>
              <button onClick={handleClick}>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Product;
