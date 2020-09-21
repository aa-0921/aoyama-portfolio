import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import React, { Profiler } from "react";
import { Sugomori } from "../components/Sugomori";
import { ToDoList } from "../components/ToDoList";
import { TopWaveBand } from "../components/TopWaveBand";
import { WaveBand } from "../components/WaveBand";

import { Top } from "./Top";

import { Profile } from "../components/Profile";

export default function section() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Top />
        <TopWaveBand />

        <div className="h-32"></div>

        <div>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10">
              <ul className="">
                <WaveBand />

                <Profile />
                <Sugomori />
                <div className="h-8"></div>

                <ToDoList />
                {/* <li className="mt-10 md:mt-0">
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
