import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { Progress } from "antd";
import { SkillBar } from "../components/SkillBar";

export const Skills = () => {
  return (
    <>
      <li>
        <div className="flex">
          <div className="ml-4 w-full" id="todo-target">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
              Skills
            </h3>

            <div className="flex flex-col w-full">
              <SkillBar skillName={"React"} skillPer={80} />
              <SkillBar skillName={"Rails"} skillPer={80} />
              <SkillBar skillName={"HTML,CSS"} skillPer={80} />
              <SkillBar skillName={"TypeScript"} skillPer={50} />
              <SkillBar skillName={"ReactHooks"} skillPer={50} />
              <SkillBar skillName={"JavaScript"} skillPer={50} />
              <SkillBar skillName={"Docker"} skillPer={40} />
              <SkillBar skillName={"Next.js"} skillPer={20} />
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
