import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

// <Layout home>とpropsが渡された場合、JSXを分岐
export const Header = () => {
  return (
    <header className={styles.header}>
      <div class></div>headerどうしよう
    </header>
  );
};
