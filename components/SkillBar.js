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
          <div className="ml-4 w-full" id="todo-target">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
              Skills
            </h3>

            <div className="flex flex-col w-full">
              <div className="antd-progress-wrap relative">
                <p className="absolute text-white w-64 pl-4">SQL</p>
                <Progress percent={80} status="active" />
              </div>

              <div className="flex flex-col ml-10"></div>
            </div>
          </div>
        </div>
      </li>

      {/* <div className="flex">
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
      </div> */}
    </>
  );
};
