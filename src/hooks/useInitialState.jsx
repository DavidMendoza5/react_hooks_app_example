import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product) => {
    const cartList = state.cart;
    let newCartList = cartList;

    const index = cartList.findIndex((item) => item.id === product.id);

    if(index >= 0) {
      newCartList[index] = {
        ...newCartList[index],
        total: newCartList[index].total + 1
      }
    } else {
      const newProduct = product;
      newProduct.total = 1;
      newCartList = [...cartList, newProduct];
    }
    
    setState({
      ...state,
      cart: newCartList,
    });
  }

  const removeFromCart = (productId) => {
    const cartList = state.cart;
    const newCartList = cartList;

    const index = cartList.findIndex((product) => product.id === productId);

    newCartList[index] = {
      ...newCartList[index],
      total: newCartList[index].total - 1
    }

    const updatedCartList = newCartList.filter((product) => product.total > 0);
    
    setState({
      ...state,
      cart: updatedCartList,
    })
  }

  const addToBuyer = (purchase) => setState({...state, purchase: [...state.purchase, purchase]});

  const addNewOrder = (order) => setState({...state, orders: [...state.orders, order]});

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  }
}

export default useInitialState;