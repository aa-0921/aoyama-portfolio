import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export const SkillBar = () => {
  return (
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
  );
};
