import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export const TopWave = () => {
  return (
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
  );
};
