import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export const ToDo = () => {
  return (
    <li>
      <div className="flex">
        <div className="ml-4" id="todo-target">
          {/* <littleWave /> */}
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
            ToDoList
          </h3>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <a
                href="https://react-todo-list-pied.vercel.app/"
                className="sugomori-image-wrap"
              >
                <div className="img-wave-div">
                  <span className="img-wave"></span>
                  <img src="/images/todo-app.gif" />
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
                  React学習の足がかりに簡単なToDoアプリを作成しました。
                  <br />
                  シャドウだけで各要素の境界を表現するneumorphismにも興味を持ち、デザインに採用しました。
                  <br />
                  ToDoのタイトル、メモの作成、Listの要素をクリックすることでToDoの削除ができるようにしています。
                </p>
              </div>
              <a
                href="https://react-todo-list-pied.vercel.app/"
                className="sugomori-image-wrap mt-2 text-blue-700"
              >
                https://react-todo-list-pied.vercel.app/
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
