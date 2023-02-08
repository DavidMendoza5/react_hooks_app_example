import React from "react";

function Product({ product, handleAddToCart }) {
  const { image, title, price, description } = product

  return (
    <article className="Products-item">
      <img src={image} alt={title} />
      <div className="Product-item-info">
        <h2>
          {title}
          <span>{' '}${price}</span>
        </h2>
        <p>{description}</p>
      </div>
      <button type="button" onClick={() => handleAddToCart(product)}>Comprar</button>
    </article>
  )
}

export default Product;