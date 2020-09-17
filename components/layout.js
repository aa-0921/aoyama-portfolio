import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
// import { Header } from "./header";

export const siteTitle = "aoyama-portfolio-site";

// <Layout home>とpropsが渡された場合、JSXを分岐
export default function Layout({ children, home }) {
  return (
    <>
      <div>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/SUGOMORI">
          <a>SUGOMORI</a>
        </Link>
        <Link href="/wave">
          <a>wave</a>
        </Link>
      </div>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="aoyama-portfolio-site" />
          <meta property="og:image" />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        {/* <Header /> */}

        <main>{children}</main>
        {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
      </div>
    </>
  );
}
