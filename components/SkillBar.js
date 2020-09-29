import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { Progress } from "antd";

export const SkillBar = () => {
  return (
    <>
      <li>
        <div className="flex">
          <div className="ml-4" id="todo-target">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
              Skills
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
                  progressbar
                </h3>
                <div className="portfolio-subtext">
                  <p className="mt-2 text-base leading-6 ">
                    説明説明説明説明説明説明説明説明
                    <br />
                    説明説明説明説明説明説明説明説明
                  </p>
                </div>
                <a
                  href="https://qiita.com/_AoAo_"
                  className="sugomori-image-wrap mt-2 text-blue-700"
                >
                  説明説明説明説明説明説明説明説明
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <Progress percent={50} status="active" />

      <div className="flex">
        <div className="ml-4">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="img-wave-div">
                <span className="SkillBar-wave"></span>

                <div className="h-5 bg-gray-500 w-64"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
