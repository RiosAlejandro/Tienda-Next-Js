import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/product.module.css';
import { convertToPath } from '../lib/util';
import CartBoton from './cartBoton';

const Product = ({item, showAs, qty}) => {

  if(showAs === "Page"){
    return ( 
      <div className={styles.page}>
        <div className={styles.image}>
          <Image 
            src={item.image}
            alt={item.description}
            width={600}
            height={700}
          />
        </div>
        <div className={styles.info}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div className={styles.price}>${item.price}</div>
          <div>{item.description}</div>
          <div>
          <CartBoton item={item} />
          </div>
        </div>
      </div>
     );
  }

  if(showAs === "ListItem"){
    return ( 
      <div className={styles.listItem}>
        <div>
          <Image 
            src={item.image}
            alt={item.description}
            width={200}
            height={200}
          />
        </div>
        <div>
          <h3>{item.title}</h3>
        
          <div>{item.price}</div>
          {qty === 0 ? '' : <div>{qty} units</div>}
          {qty === 0 ? '' : <div>Subtotal: ${qty * item.price}</div>}
        </div>
      </div>
     );
  }

  return ( 
    <div className={styles.item} >
      <div>
        <Link href={`/store/${convertToPath(item.title)}`} legacyBehavior>
          <a>
            <Image 
              src={item.image}
              alt={item.description}
              width={300}
              height={400}
            />
          </a>
        </Link>
      </div>

      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.title)}`} legacyBehavior>
            <a>
              {item.title} 
            </a>
          </Link>
        </h3>
      </div>

      <div>
        ${item.price}
      </div>
      
      <div>
        <CartBoton item={item} />
      </div>

    </div>
   );
}
 
export default Product;