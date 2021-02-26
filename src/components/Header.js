import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="vintage tech logo" className="logo" />
      <nav>
        <ul>
          {" "}
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}
