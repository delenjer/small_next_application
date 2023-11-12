import Link from 'next/link';
import styles from './Back.module.css'

export const BackAction = () => (
  <Link className={styles.back} href="/">
    Go back
  </Link>
);
