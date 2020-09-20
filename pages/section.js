import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import React from "react";
import { Sugomori } from "../components/Sugomori";
import { ToDoList } from "../components/ToDoList";
import { WaveBand } from "../components/WaveBand";

// import { littleWave } from "../components/littleWave";
// FontAwesomeIcon関連
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faChevronRight } from "@fornawesome/free-solid-svg-icons";

export default function section() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className="h-64"></div>
        <div className="h-64"></div>
        <div>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10">
              <ul className="">
                <Sugomori />
                <WaveBand />
                <ToDoList />
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        JavaScript
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        JavaScript
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
