import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Ali Husnain </h1>
        <p>follow tutrial ....</p>
        {children}
      </div>
    </div>
  );
}
