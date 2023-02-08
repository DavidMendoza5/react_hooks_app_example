import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import AppContext from '../context/AppContext';

import '../styles/components/Checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemoveFromCart = (productId) => removeFromCart(productId);

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.total);
    const sum = cart.reduce(reducer, 0);

    return sum;
  }

  return (
    <main className="Checkout">
      <section className="Checkout-content">
        <h3>Lista de pedidos:</h3>
        {
          cart.length > 0 ?
            <>
              {cart.map((product) => (
                <article className="Checkout-item" key={product.id}>
                  <div className="Checkout-element">
                    <h4>{product.title}</h4>
                    <span>Precio unitario: ${product.price}</span>
                    <span>Cantidad: {product.total}</span>
                    <span>Total: ${product.price * product.total}</span>
                  </div>
                  <button type="button" onClick={() => handleRemoveFromCart(product.id)}>
                    <FaTrash title='Eliminar' />
                  </button>
                </article>
              ))}
          </>
          : <p>No se han agregado productos</p>
        }
      </section>
      {cart.length > 0 && (
        <aside className="Checkout-sidebar">
          <h3>Precio total: ${handleSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar</button>
          </Link>
        </aside>
      )}
    </main>
  );
}

export default Checkout;