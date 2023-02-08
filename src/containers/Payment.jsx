import React from 'react';
import '../styles/components/Payment.css';

function Payment() {
  return (
    <main className="Payment">
      <section className="Payment-content">
        <h3>Resumen del pedido</h3>
        <article className="Payment-button">
          Pagar con Paypal
        </article>
      </section>
      {/* <aside className="Payment-sidebar"></aside> */}
    </main>
  );
}

export default Payment;