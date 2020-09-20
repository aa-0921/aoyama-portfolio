import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export const Sugomori = () => {
  return (
    <li>
      <div className="flex">
        <div className="ml-4">
          {/* <littleWave /> */}
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
            SUGOMORI
          </h3>
          <div class="flex flex-row">
            <div class="flex flex-col">
              <a
                href="https://sugomori.herokuapp.com/"
                className="sugomori-image-wrap"
              >
                <img src="/images/portfolio/sugomori_index.png" />
              </a>
              <a
                href="https://sugomori.herokuapp.com/"
                className="sugomori-image-wrap mt-2"
              >
                <img src="/images/portfolio/sugomori_about.png" />
              </a>
            </div>
            <div class="flex flex-col ml-10">
              <h3 className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl sm:leading-10">
                ←アプリへのリンク
              </h3>
              <h1 className="text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-base">
                テストユーザーでログインできます。
              </h1>
              <p className="mt-2 text-base leading-6 text-gray-500">
                [テストユーザー]
              </p>
              <p className="mt-2 text-base leading-6 text-gray-500">
                email: example-1@example.com <br />
                password: ababab
              </p>
              <p className="mt-2 text-base leading-6 text-gray-500">
                アプリ名：SUGOMORI
                <br />
                家でできる好きなことや好きなものの写真をコメント付きで投稿できるアプリです。
                <br />
                コロナ禍において、何か社会に役立つものをつくれないかと思い作成しました。
                <br />
                「家で何しよう」と悩む機会が増える中で、「好きなもの」を共有できるアプリがあれば、家で過ごす事が有意義になるのではないかと思いました。
              </p>
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
