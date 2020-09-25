import Head from "next/head";
import Layout, { siteTitle } from "./layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styled from "styled-components";
import React from "react";
import Wavify from "react-wavify";

export const Top = () => {
  return (
    <>
      <div className="box h-screen relative">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        <div className="wave -four"></div>

        <div className="flex flex-col top-name">
          Akuto
          <br />
          Aoyama
        </div>
      </div>
    </>
  );
};
