import React from 'react';
import Layout from '@/components/layout';
import { getItems } from '@/services/itemServices';
import Image from 'next/image';
import Product from '@/components/product';
import style from '../../styles/product.module.css';

const Store = ({items}) => {
  return ( 
    <Layout title='Store'>
      <h2>Store</h2>
      <div className={style.items}>
        {items && items.map((item) => 
          <Product key={item.id} item={item} showAs="item" />
        )}
      </div>
    </Layout>
   );
}
 
export default Store;

export async function getStaticProps(){
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}