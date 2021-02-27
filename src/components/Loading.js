import React from "react";
import loading from "../assets/loading.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h1>loading</h1>
      <img src={loading} alt="loading" />
    </div>
  );
}
