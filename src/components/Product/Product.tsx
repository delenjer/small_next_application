import React, { FC } from 'react';

import {ProductDto} from '@/models/models';
import styles from './Product.module.css'
import Image from 'next/image';
import {ShowMoreAction} from '@/components/ShowMoreAction/ShowMoreAction';

type productProps = {
  product: ProductDto,
}

export const Product:FC<productProps> = ({ product }) => (
  <article className={styles.product}>
    <div className={styles.productContent}>
      <div className={styles.imgBox}>
        <Image
          className={styles.img}
          fill={true}
          src={product.image}
          sizes={'100%'}
          alt={product.title}
        />
      </div>

      <h2 className={styles.productTitle}>
        { product.title }
      </h2>

      <p className={styles.price}>
        Price:
        <span className="ml-2">{product.price} $</span>
      </p>

      <p className={styles.description}>
        { product.description }
      </p>
    </div>

    <ShowMoreAction id={product.id} />
  </article>
);
