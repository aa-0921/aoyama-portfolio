import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TopWaveBand />
      <section className={utilStyles.headingMd}>
        <p>portfolio-site</p>
      </section>
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
