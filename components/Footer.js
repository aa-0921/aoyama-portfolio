import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-wave absolute bottom-0 h-32">
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
    </footer>
  );
};
