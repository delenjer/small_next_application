import  {FC} from 'react';

import {ProductDto} from '@/models/models';
import Image from 'next/image';
import styles from './Details.module.css'


type DetailsProps = {
  details: ProductDto,
}

export const Details:FC<DetailsProps> = ({ details }) => (
  <div className={styles.details}>
    <div className={styles.detailsImgBox}>
      <Image
        src={details.image}
        alt={details.title}
        fill={true}
        sizes={'100%'}
      />
    </div>

    <section className={styles.detailsSection}>
      <h1 className={styles.title}>{ details.title }</h1>

      <p className="mb-6">{ details.description }</p>

      <div className={styles.detailsHolder}>
        Category:

        <p className={styles.text}>{ details.category }</p>
      </div>

      <div className={styles.detailsHolder}>
        Price:

        <p className={styles.text}>{ details.price }$</p>
      </div>


      <div className={styles.detailsHolder}>
        Rating:

        <p className={styles.rating}>{ details.rating?.rate }</p>
      </div>
    </section>
  </div>
);
