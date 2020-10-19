import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export const Sugomori = () => {
  return (
    <li>
      <div className="flex" id="sugomori-target">
        <div className="ml-4">
          {/* <littleWave /> */}
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
            SUGOMORI
          </h3>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <a
                href="https://sugomori.herokuapp.com/"
                className="sugomori-image-wrap"
              >
                <div className="img-wave-div">
                  <span className="img-wave"></span>

                  <img src="/images/sugomori-main.gif" />
                  {/* <img src="/images/portfolio/sugomori_index.png" /> */}
                </div>
              </a>
              <a
                href="https://sugomori.herokuapp.com/"
                className="sugomori-image-wrap mt-2"
              >
                <div className="img-wave-div">
                  <span className="img-wave"></span>
                  <img src="/images/sugomori-about.gif" />
                  {/* <img src="/images/portfolio/sugomori_about.png" /> */}
                </div>
              </a>
            </div>
            <div className="flex flex-col ml-10">
              <div className="portfolio-text">
                <h3 className="mt-2 text-xl leading-8 font-extrabold tracking-tight sm:text-xl sm:leading-10">
                  ←アプリへのリンク
                </h3>
                <h1 className="text-xl leading-8 font-extrabold tracking-tight sm:text-base">
                  テストユーザーでログインできます。
                </h1>
              </div>

              <div className="portfolio-subtext">
                <p className="mt-2 text-base leading-6 ">[テストユーザー]</p>
                <p className="mt-2 text-base leading-6 ">
                  email: example-1@example.com <br />
                  password: ababab
                </p>
                <p className="mt-2 text-base leading-6 ">
                  アプリ名：SUGOMORI
                  <br />
                  家でできる好きなことや好きなものの写真をコメント付きで投稿できるアプリです。
                  <br />
                  コロナ禍において、何か社会に役立つものをつくれないかと思い作成しました。
                  <br />
                  「家で何しよう」と悩む機会が増える中で、「好きなもの」を共有できるアプリがあれば、家で過ごす事が有意義になるのではないかと思いました。
                </p>
              </div>

              <a
                href="https://sugomori.herokuapp.com/"
                className="sugomori-image-wrap mt-2 text-blue-700"
              >
                https://sugomori.herokuapp.com/
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
