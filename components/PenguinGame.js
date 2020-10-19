import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export const PenguinGame = () => {
  return (
    <li>
      <div className="flex">
        <div className="ml-4" id="todo-target">
          {/* <littleWave /> */}
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
            PenguinGame
          </h3>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <a
                href="https://penguin-game-delta.vercel.app/"
                className="sugomori-image-wrap"
              >
                <div className="img-wave-div">
                  <span className="img-wave"></span>
                  <img src="/images/penguin-game.gif" />
                  {/* <img src="/images/portfolio/ToDoスクショ.png" /> */}
                </div>
              </a>
            </div>
            <div className="flex flex-col ml-10">
              <h3 className=" portfolio-text mt-2 text-xl leading-8 font-extrabold tracking-tight  sm:text-xl sm:leading-10">
                ←アプリへのリンク
              </h3>
              <div className="portfolio-subtext">
                <p className="mt-2 text-base leading-6 ">
                  JavaScript学習の為に、バイクゲームのコードを参考にペンギンが飛び跳ねるゲームを作成しました。
                  <br />
                  ゲームオーバーまでの時間を記録し、表示するように機能を付け足しました。
                  <br />
                  JQuery-Snowfallを使って雪を降らせました。
                </p>
              </div>
              <a
                href="https://penguin-game-delta.vercel.app/"
                className="sugomori-image-wrap mt-2 text-blue-700"
              >
                https://penguin-game-delta.vercel.app/
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
