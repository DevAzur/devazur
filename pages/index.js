import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevAzur</title>
        <meta name='description' content='DevAzur Homepage' />
      </Head>
      <h1>Homepage</h1>
    </div>
  )
}