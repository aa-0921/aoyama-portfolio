import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styled from "styled-components";
import React from "react";
import Wavify from "react-wavify";

export default function Wave() {
  return (
    <>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        <div className="title">top-wave</div>
      </div>

      <div className="under-box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        <div className="title">under-wave</div>
      </div>

      <div className="neu-box"></div>

      <div className="wave-band">
        <Wavify
          fill="#CBE7ED"
          paused={false}
          options={{
            height: 120,
            amplitude: 5,
            speed: 0.45,
            points: 4,
          }}
        />

        <Wavify
          fill="#CBE7ED"
          paused={false}
          options={{
            height: 80,
            amplitude: 3,
            speed: 0.6,
            points: 6,
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
    </>
  );
}
