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
      {/* <View style={styles.container}>
            <AnimatedWave
                sizeOvan={150}
                // onPress={() => alert("Hello")}
                colorOvan={'#bebebe'}
                zoom={5}
            />
        </View> */}
    </>
  );
}
