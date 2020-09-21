import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styled from "styled-components";
import React from "react";
import Wavify from "react-wavify";
import { TopWaveBand } from "../components/TopWaveBand";

export default function Wave() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <TopWaveBand />

        <div className="box">
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
          <div className="title">top-wave</div>
        </div>
        <div className="relative">
          <div className="under-box absolute">
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            <div className="title">under-wave</div>
          </div>
          <div className="under-box under absolute">
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            <div className="title">under-wave</div>
          </div>
        </div>

        <div className="neu-box"></div>

        <div className="wave-band">
          <Wavify
            fill="#CBE7ED"
            paused={false}
            options={{
              height: 10,
              amplitude: 5,
              speed: 0.45,
              points: 4,
            }}
          />

          <Wavify
            fill="#CBE7ED"
            paused={false}
            options={{
              height: 10,
              amplitude: 5,
              speed: 0.6,
              points: 4,
            }}
          />
        </div>

        <div className="neu-box"></div>
        <div>
          <div className="css-wave-wrap">
            <div className="css-wave wave1"></div>
            <div className="css-wave wave2"></div>
            <div className="css-wave wave3"></div>
            <div className="css-wave wave4"></div>
          </div>
          <div className="css-wave-wrap reverse">
            <div className="css-wave wave1"></div>
            <div className="css-wave wave2"></div>
            <div className="css-wave wave3"></div>
            <div className="css-wave wave4"></div>
          </div>
        </div>
      </Layout>
    </>
  );
}
