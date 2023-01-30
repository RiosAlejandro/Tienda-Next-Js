import React from 'react';
import Product from './product';
import { useAppContext } from './stateWrapper';
import styles from '../styles/shoppingCart.module.css';

const ShoppingCart = () => {

  const cart = useAppContext();

  function handleCloseCart() {
    cart.closeCart();
  }

  function getTotal(){
    const total = cart.items.reduce((acc, item) => acc + item.qty * item.price, 0);

    return total;
  }

  return ( 
    <div 
      className={styles.ShoppingCart} 
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button className={styles.close} onClick={handleCloseCart}>Close</button>

      {
        cart.items.length === 0 ? (
          <div className={styles.empty}>Cart is empty</div>
        ) : (
          <>
          <h3>Your items</h3>
          <div>
            {cart.items.map((item) => (
              <Product key={item.id} item={item} showAs="ListItem" qty={item.qty} />
            ))}
          </div>
          <div className={styles.total}>Total: ${getTotal()}</div>
          </>
        )
      }
    </div>
   );
}
 
export default ShoppingCart;