import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        <div className="title flex flex-col">
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/SUGOMORI">
            <a>SUGOMORI</a>
          </Link>
          <Link href="/wave">
            <a>wave</a>
          </Link>
          <Link href="/section">
            <a>section</a>
          </Link>
        </div>
      </div>
    </header>
  );
};
