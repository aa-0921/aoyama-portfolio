import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import React, { Profiler } from "react";
import { Sugomori } from "../components/Sugomori";
import { ToDo } from "../components/ToDo";
import { PenguinGame } from "../components/PenguinGame";
import { GhibliGallery } from "../components/GhibliGallery";

import { TopWaveBand } from "../components/TopWaveBand";
import { WaveBand } from "../components/WaveBand";
import { Top } from "../components/Top";
import { Profile } from "../components/Profile";
import { Qiita } from "../components/Qiita";
import { Skills } from "../components/Skills";
// import { RainDrop } from "../components/RainDrop";

export default function index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <Top />
        <TopWaveBand />

        {/* <div className="h-32"></div> */}
        <div>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <ul className="">
                <WaveBand />
                <Profile />
                {/* <div className="h-16"></div> */}
                {/* <div className="mb-10"></div> */}
                <Sugomori />
                <div className="mb-10"></div>
                <ToDo />
                <div className="mb-10"></div>
                <PenguinGame />
                <div className="mb-10"></div>
                <GhibliGallery />
                <div className="mb-10"></div>
                <Qiita />
                <div className="mb-10"></div>
                <Skills />
                {/* <RainDrop /> */}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
