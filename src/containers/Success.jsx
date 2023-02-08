import React from 'react';
import '../styles/components/Success.css';

function Success() {
  return (
    <main className="Success">
      <section className="Success-content">
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegará en 4 días</span>
        <article className="Success-map">
          Google maps
        </article>
      </section>
    </main>
  );
}

export default Success;