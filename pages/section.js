import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styled from "styled-components";
import React from "react";
import Wavify from "react-wavify";

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

        <div>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="lg:text-center">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                SUGOMORI
              </h3>
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                JavaScript関連
              </p>
            </div> */}

            <div className="mt-10">
              <ul className="">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">〇〇</div>
                    <div className="ml-4">
                      {/* <littleWave /> */}
                      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        SUGOMORI
                      </h3>

                      {/* <FontAwesomeIcon
                        icon={faChevronRight}
                        size="lg"
                        color="black"
                      /> */}
                      <div class="flex flex-row">
                        <div class="flex flex-col">
                          <a
                            href="https://sugomori.herokuapp.com/feed"
                            className="sugomori-image-wrap"
                          >
                            <img src="/images/portfolio/sugomori_index.png" />
                          </a>
                          <a
                            href="https://sugomori.herokuapp.com/"
                            className="sugomori-image-wrap mt-2"
                          >
                            <img src="/images/portfolio/sugomori_about.png" />
                          </a>
                        </div>
                        <div class="flex flex-col ml-10">
                          <h3 className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl sm:leading-10">
                            ←アプリへのリンク
                          </h3>
                          <h1 className="text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-base">
                            テストユーザーでログインできます。
                          </h1>
                          <p className="mt-2 text-base leading-6 text-gray-500">
                            [テストユーザー]
                          </p>
                          <p className="mt-2 text-base leading-6 text-gray-500">
                            email: example-1@example.com <br />
                            password: ababab
                          </p>
                          <p className="mt-2 text-base leading-6 text-gray-500">
                            アプリ名：SUGOMORI
                            <br />
                            家でできる好きなことや好きなものの写真をコメント付きで投稿できるアプリです。
                            <br />
                            コロナ禍において、何か社会に役立つものをつくれないかと思い作成しました。
                            <br />
                            「家で何しよう」と悩む機会が増える中で、「好きなもの」を共有できるアプリがあれば、家で過ごす事が有意義になるのではないかと思いました。
                          </p>
                          <a
                            href="https://sugomori.herokuapp.com/"
                            className="sugomori-image-wrap mt-2"
                          >
                            https://sugomori.herokuapp.com/
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">〇〇</div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        Rails関連
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
                    <div className="flex-shrink-0">〇〇</div>
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
                    <div className="flex-shrink-0">〇〇</div>
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
