import React from "react";
import "./Newsletter.scss";
import { GrSend } from "react-icons/gr";
function Newsletter() {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <div className="desc">
        Get timely updates from your favorite products.
      </div>
      <div className="inputContainer">
        <input placeholder="Your email" />
        <button>
          <GrSend />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
