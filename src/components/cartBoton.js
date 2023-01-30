import React from 'react';
import styles from '../styles/cartBoton.module.css';
import { useAppContext } from './stateWrapper';

const CartBoton = ({ item }) => {

  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }

  return ( 
    <button className={styles.button} onClick={handleClick} >
      Add to cart
    </button>
   );
}
 
export default CartBoton;