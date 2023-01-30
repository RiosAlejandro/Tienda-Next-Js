
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import { getLatestItems } from '@/services/itemServices'
import Product from '@/components/product'



export default function Home({ items }) {
  return (
    <>
      <Layout title='Home' >
        <div className={styles.banner}>
          <div className={styles.bannerBackground}>
            <div className={styles.bannerInfo}>
              <h1>Next 2023 Collection</h1>
              <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
            </div>
          </div>
        </div>

        <h3>Latest Products</h3>
        <div className={styles.items}>
          {items && items.map((item) => (
            <Product key={item.id} item={item} showAs='item' />
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps(){
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    }
  }
}


