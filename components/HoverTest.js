import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export const HoverTest = () => {
  return (
    <div className="img-wave-div">
      <span className="img-wave"></span>
      Button
    </div>
  );
};
