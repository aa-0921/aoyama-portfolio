import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    (function () {
      const headerTarget = document.getElementById("header"),
        height = 56;

      let offset = 0,
        lastPosition = 0,
        ticking = false;
      function onScroll(lastPosition) {
        if (headerTarget != null) {
          if (lastPosition > height) {
            if (lastPosition > offset) {
              headerTarget.classList.add("head-animation");
            } else {
              headerTarget.classList.remove("head-animation");
            }
            offset = lastPosition;
          }
        }
      }

      window.addEventListener("scroll", function (e) {
        lastPosition = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(function () {
            onScroll(lastPosition);
            ticking = false;
          });
          ticking = true;
        }
      });
    })();
  }, []);

  return (
    <header className="{styles.header} fixed" id="header">
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        <div className="title flex flex-col">
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/SUGOMORI">
            <a>SUGOMORI</a>
          </Link>
          <Link href="/wave">
            <a>wave</a>
          </Link>
          <Link href="/section">
            <a>section</a>
          </Link>
        </div>
      </div>
    </header>
  );
};
