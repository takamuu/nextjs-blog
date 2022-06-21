import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>DevCranesとは</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>Decembar 24, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>DevCranesとは</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>Decembar 24, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>DevCranesとは</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>Decembar 24, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>DevCranesとは</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>Decembar 24, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
