import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

function Information() {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate()

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const purchase = Object.fromEntries(formData);
    addToBuyer(purchase);
    navigate('/checkout/payment');
  }

  return (
    <main className="Information">
      <section className="Information-content">
        <article className="Information-head">
          <h2>Información de contacto</h2>
        </article>
        <article className="Information-form">
          <form ref={form}>
            <label htmlFor="name">Nombre completo:
              <input id="name" type="text" placeholder="Nombre completo" name="name" />
            </label>
            <label htmlFor="email">Correo electrónico:
              <input id="email" type="text" placeholder="Correo electrónico" name="email" />
            </label>
            <label htmlFor="address">Dirección:
              <input id="address" type="text" placeholder="Dirección" name="address" />
            </label>
            <label htmlFor="apto">Apartamento:
              <input id="apto" type="text" placeholder="Apartamento" name="apto" />
            </label>
            <label htmlFor="city">Ciudad:
              <input id="city" type="text" placeholder="Ciudad" name="city" />
            </label>
            <label htmlFor="state">Estado:
              <input id="state" type="text" placeholder="Estado" name="state" />
            </label>
            <label htmlFor="country">País:
              <input id="country" type="text" placeholder="País" name="country" />
            </label>
            <label htmlFor="postal_code">Código postal:
              <input id="postal_code" type="text" placeholder="Código postal" name="postal_code" />
            </label>
            <label htmlFor="phone">Teléfono:
              <input id="phone" type="text" placeholder="Teléfono" name="phone" />
            </label>
          </form>
        </article>
        <article className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </article>
      </section>
      <aside className="Information-sidebar">
        <h1>Pedido</h1>
        {cart.map((item) => (
          <section key={item.id} className="Information-item">
            <article className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </article>
        </section>
        ))}
      </aside>
    </main>
  );
}

export default Information;