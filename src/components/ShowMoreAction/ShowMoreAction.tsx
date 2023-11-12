import React from 'react';

import Link from 'next/link';
import styles from './ShowMore.module.css';

export const ShowMoreAction = ({ id }: { id: number }) => (
  <Link
    className={styles.showMore}
    href={`/details/${id}`}
  >
    Show details
  </Link>
);
