import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export const Qiita = () => {
  return (
    <li>
      <div className="flex">
        <div className="ml-4" id="todo-target">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
            Qiita
          </h3>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <a
                href="https://react-todo-list-pied.vercel.app/"
                className="sugomori-image-wrap"
              >
                <div className="img-wave-div">
                  <span className="img-wave"></span>
                  <img src="/images/qiita.gif" />
                </div>
              </a>
            </div>
            <div className="flex flex-col ml-10">
              <h3 className=" portfolio-text mt-2 text-xl leading-8 font-extrabold tracking-tight  sm:text-xl sm:leading-10">
                ←Qiitaへのリンク
              </h3>
              <div className="portfolio-subtext">
                <p className="mt-2 text-base leading-6 ">
                  プロフィールにも書きましたが、学習していく中で、Qiitaに投稿し続け、2020年9月時点で累計記事数が41件になりました。
                  <br />
                  アウトプットする為に文章を書くことは楽しく、学習内容が頭の中で整理されることを実感できたので、今後も続けて行きたいと思います。
                </p>
              </div>
              <a
                href="https://qiita.com/_AoAo_"
                className="sugomori-image-wrap mt-2 text-blue-700"
              >
                https://qiita.com/_AoAo_
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
