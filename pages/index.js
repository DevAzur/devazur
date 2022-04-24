import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevAzur</title>
        <meta name="description" content="DevAzur Homepage" />
      </Head>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Hello,</h1>
      </div>
      <div className={styles.logo_container}>
        <div className={styles.circle}>
          <h1>Logo</h1>
        </div>
      </div>
    </div>
  );
}
