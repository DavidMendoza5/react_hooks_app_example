import React, { useContext } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useNavigate } from'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, purchase } = state;
  const navigate = useNavigate()

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const paypalOtions = {
    clientId: process.env.REACT_APP_PAYPAL_ID,
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        purchase,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  }
  console.log(process.env.REACT_APP_PAYPAL_ID);

  return (
    <main className="Payment">
      <section className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <section className='Payment-item' key={item.id}>
            <article className='Payment-element'>
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </article>
          </section>
        ))}
        <article className="Payment-button">
          Pagar con Paypal
          <PayPalScriptProvider options={{ "client-id": "test" }} >
            <PayPalButtons
              paypalOptions={paypalOtions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal()}
              onClick={() => console.log('Start Payment')}
              onApprove={data => handlePaymentSuccess(data)}
              onError={error => console.log(error)}
              onCancel={data => console.log(data)}  
              style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        </article>
      </section>
    </main>
  );
}

export default Payment;