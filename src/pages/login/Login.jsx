import React from "react";
import alertify from "alertifyjs";
import "./Login.scss";
import { useState } from "react";
import { login } from "../../redux/apiCall";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();
  if (user.currentUser !== null) {
    navigate("/");
  }
  const handleClick = (e) => {
    // Set the default alert dialog options

    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <div className="login">
      <div className="wrapper">
        <h1>SIGN IN</h1>
        <form>
          <input
            type="text
          "
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>LOGIN</button>
          <Link to="/register">
            <p>CREATE A NEW ACCOUNT</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
