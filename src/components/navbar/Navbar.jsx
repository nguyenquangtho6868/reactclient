import React, { useState } from "react";
import "./Navbar.scss";
import { FcSearch } from "react-icons/fc";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutStart } from "../../redux/userRedux";
function Navbar() {
  const dispatch = useDispatch();
  const [logout, setLogout] = useState(true);
  const user = localStorage.getItem("login")
    ? [JSON.parse(localStorage.getItem("login"))]
    : [];
  console.log(user.length);
  const quantity = useSelector((state) => state.cart.quantity);
  //const login = useSelector((state) => state.user);

  const logout1 = user.length > 0 ? true : false;
  // console.log(login.currentUser !== null);
  const logoutUser = () => {
    dispatch(logoutStart());
    localStorage.removeItem("login");
    setLogout(false);
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <span>EN</span>
          <div className="searchContainer">
            <input></input>
            <FcSearch />
          </div>
        </div>
        <div className="center">
          <Link to="/">
            <h1>Fashion Store</h1>
          </Link>
        </div>
        <div className="right">
          {logout && logout1 && (
            <Link to="/">
              <div className="menuitem" onClick={logoutUser}>
                Xin Chào {user[0].email}
                <spana>Logout</spana>
              </div>
            </Link>
          )}
          {!logout1 && (
            <Link to="/login">
              <div className="menuitem">SIGN IN</div>
            </Link>
          )}

          <Link to="/cart">
            <div className="menuitem">
              <p>{quantity}</p>
              <div className="icon">
                <CgShoppingCart />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
