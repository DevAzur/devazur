import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { DownOutlined } from '@ant-design/icons';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevAzur</title>
        <meta name="description" content="DevAzur Homepage" />
      </Head>
      <div className={styles.text_container}>
        <div className={styles.title_container}>
          <h3 className={styles.t1}>
            CREATEUR DE SITE WEB ET D'APPLICATIONS MOBILES (FULL-STACK)
          </h3>
          <h2 className={styles.t2}>Nous concevons et développons</h2>
          <h2 className={styles.t3}>
            des solutions pour les entreprises de demain
          </h2>
        </div>
        <div className={styles.scroll_container}>
          <DownOutlined className={styles.scroll} width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
