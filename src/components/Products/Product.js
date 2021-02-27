import React from "react";
import { Link } from "react-router-dom";
export default function Product({ title, image, price, id }) {
  const url = image.url;
  return (
    <article className="product">
      <div className="img-container">
        <img src={url} alt={title} />
        <Link to={`products/${id}`} className="btn btn-primary product-link">
          details
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-tilte">{title}</p>
        <p className="product-price">{price}</p>
      </div>
    </article>
  );
}
