import React from "react";
import "./Register.scss";
import { useState } from "react";
import { publicRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleCreate = async (e) => {
    e.preventDefault();
    const user = { username: userName, email: email, password: password };
    try {
      const res = await publicRequest.post("auth/register", user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="wrapper">
        <h1>CREATE AN ACCOUNT</h1>
        <form>
          <input
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <span>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button onClick={handleCreate}>CREATE</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
