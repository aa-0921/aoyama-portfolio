import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import React, { Profiler } from "react";
import { Sugomori } from "../components/Sugomori";
import { ToDo } from "../components/ToDo";
import { TopWaveBand } from "../components/TopWaveBand";
import { WaveBand } from "../components/WaveBand";
import { Top } from "../components/Top";
import { Profile } from "../components/Profile";
import { Qiita } from "../components/Qiita";
import { SkillBar } from "../components/SkillBar.js";

export default function index() {
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
                <ToDo />
                <Qiita />
                <SkillBar />
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
