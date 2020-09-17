import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styled from "styled-components";
// export const Home = () => {

export default function Home() {
  // console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>portfolio-site</p>
      </section>
      {/* utilStylesからスタイルを二種類指定 */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>自己紹介？</h2>
        <ul className={utilStyles.list}></ul>
      </section>
      <Title>styled.h1</Title>
    </Layout>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
