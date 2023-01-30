/* Para generar un archivo que se incluye con rutas dinamicas el nombre va rodeado de [] */

import Layout from '@/components/layout';
import Product from '@/components/product';
import { getItemData, getPathsFromIds } from '@/lib/util';
import React from 'react';

const ProductPage = ({ productInfo }) => {
  return ( 
    <Layout>
      <Product item={productInfo.data} showAs="Page" />
    </Layout>
   );
}
 
export default ProductPage;


export async function getStaticPaths() {/* esta funcion genera las rutas dinamicas, el nombre es convencion */
  const paths = await getPathsFromIds();/* guardar el id de todos los objetos */

  return {
    paths: paths, /* retorna los id */
    fallback: false, /* si una ruta no existe y esta el valor en false renderiza a ruta 404 */
  }
}

export async function getStaticProps({ params }) { /* funcion estatica por defecto de next */
  const id = params.id; /* extraigo el id del producto q seleccione */
  const product = await getItemData(id); /**extraigo la info del producto segun el id que pase por funcion */

  return {
    props: { /* retorno un props con la info del producto seleccionado */
      productInfo: product,
    },
  };
}



