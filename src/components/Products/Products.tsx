import React, { FC } from 'react';

import {ProductDto} from '@/models/models';
import { Product } from '../Product/Product';
import styles from './Products.module.css'

type ProductsProps = {
  products: ProductDto[],
}

export const Products:FC<ProductsProps> = ({ products }) => (
  <div className={styles.products}>
    {
      products?.map((product) => (
        <Product key={product.id} product={product} />
      ))
    }
  </div>
)
