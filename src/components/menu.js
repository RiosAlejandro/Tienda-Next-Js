import Link from 'next/link';
import React from 'react';
import styles from '../styles/menu.module.css';
import { useAppContext } from './stateWrapper';
 
const Menu = () => {

  const cart = useAppContext();

  function handleOpenCart(){
    cart.openCart();
  }

  return ( 
    <nav className={styles.menu} >
      <div>
        <Link href='/' legacyBehavior>
          <a className={styles.link} >Home</a>
        </Link>
        <Link href='/store' legacyBehavior>
          <a className={styles.link} >Store</a>
        </Link>
        <Link href='/faq' legacyBehavior>
          <a className={styles.link} >Faq</a>
        </Link>
      </div>

      <div className={styles.cart}>
        <a href='#' onClick={handleOpenCart} >
          Cart ({cart.getNumberOfItems()})
        </a>
      </div>
    </nav>
   );
}
 
export default Menu;