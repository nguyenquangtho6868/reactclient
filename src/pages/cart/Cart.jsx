import React from "react";
import "./Cart.scss";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import { MdRemoveShoppingCart } from "react-icons/md";
import { removeProduct } from "../../redux/cartRedux";
import Footer from "../../components/footer/Footer";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Link } from "react-router-dom";
import { removeCart } from "../../redux/cartRedux";

function Cart() {
  const [remove, setRemove] = useState(false);
  const key =
    "pk_test_51Mm1E8ByzNVAg7oC7xGOSh4epr00vn1D1CW45iAdkHQnJIXC9bt1tZ6MFzJC0tBO005ecnGq7zV3EQFiy5REUBaj00tv0zUR8P";
  const cart = useSelector((state) => state.cart);
  const user = localStorage.getItem("login")
    ? [JSON.parse(localStorage.getItem("login"))]
    : [];
  const checkout = user.length > 0 ? true : false;
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();
  console.log(cart);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/order", {
          address: stripeToken.card.address_line1,
          products: cart,
          amount: cart.total,
          userId: user[0]._id,
        });
        console.log(res.data);
        setRemove(true);
      } catch {}
    };

    stripeToken && makeRequest();
  }, [stripeToken]);
  useEffect(() => {
    if (remove === true) {
      dispatch(removeCart());
    }
  }, [remove]);
  const handleRemove = (index, product) => {
    console.log(product);
    dispatch(removeProduct({ index: index, product: product }));
  };
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="cart">
        <h1>YOUR BAG</h1>
        <div className="top">
          <Link to="/">
            {" "}
            <button>CONTINUE SHOPPING</button>
          </Link>

          <div className="topTexts">
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist (0)</span>
          </div>
          <button type="filled">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            {cart.products.map((product, index) => (
              <div className="product" key={index}>
                <div className="productDetail">
                  <img src={product.img} alt="" />
                  <div className="detail">
                    <span>
                      {" "}
                      <b>Product:</b> {product.title}
                    </span>
                    <span>
                      {" "}
                      <b>ID:</b> {product._id}
                    </span>
                    <div
                      className="productColor"
                      style={{ backgroundColor: `${product.color}` }}
                    ></div>
                    <span>
                      <b>Size:</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className="priceDetail">
                  <div className="productAmountContainer">
                    <MdRemoveShoppingCart
                      style={{ fontSize: "30px" }}
                      onClick={() => {
                        handleRemove(index, product);
                      }}
                    />
                    <div className="productAmount">{product.quantity}</div>

                    <div className="productPrice">$ {product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="summary">
            <h1>ORDR SUMMARY</h1>
            <div className="summaryItem">
              <span>Subtotal</span>
              <span>$ {cart.total}</span>
            </div>
            <div className="summaryItem">
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className="summaryItem">
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </div>
            <div className="summaryItem">
              <span>Total</span>
              <span>$ {cart.total}</span>
              {checkout && (
                <StripeCheckout
                  name="NQT STORE"
                  image="https://firebasestorage.googleapis.com/v0/b/adminasm3.appspot.com/o/images%2FScreenshot%202023-01-27%20182715.pngc687c7e3-cddb-4a34-9ffd-346803f0c2a1?alt=media&token=6f36c461-ab6d-4524-9cb2-0560df5923ad"
                  billingAddress
                  shippingAddress
                  description={`Your total is $${cart.total}`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={key}
                >
                  <button>CHECKOUT NOW</button>
                </StripeCheckout>
              )}
              {!checkout && (
                <div>
                  <p>Please</p>
                  <Link to="/login">
                    <button> Login </button>
                  </Link>

                  <span>to checkout</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
