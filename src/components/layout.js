import React from 'react';
import Head from 'next/head';
import styles from '../styles/layout.module.css';
import Menu from './menu';
import ShoppingCart from './shoppingCart';

const Layout = ({children, title}) => {
  return ( 
    <>
      <Head>
        <title>Shopping Next { title ? `| ${title}` : 'Js' }</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <div className={styles.container}>
        { children }
      </div>

      <ShoppingCart />
    </>
   );
}
 
export default Layout;