import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'Dev Cranes';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/images/devcrens1.png" className={utilStyles.borderCircle} />
        <img src="/images/com3.png" className={utilStyles.titleText} />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
