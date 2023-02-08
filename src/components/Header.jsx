import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket, FaHome } from 'react-icons/fa';
import AppContext from '../context/AppContext';

import '../styles/components/Header.css';

function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state

  const reducer = (accumulator, currentValue) => accumulator + currentValue.total;
  const totalProducts = cart.reduce(reducer, 0)

  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">
            <FaHome title="Home" size="2rem" />
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FaShoppingBasket title="Checkout"/>
        </Link>
        {totalProducts > 0 && <div className='Header-alert'>{totalProducts}</div>}
      </div>
    </header>
  )
}

export default Header;