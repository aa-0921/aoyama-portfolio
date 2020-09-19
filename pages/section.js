import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styled from "styled-components";
import React from "react";
import Wavify from "react-wavify";

export default function section() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <div>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide">
                TRANSACTIONS
              </p>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                A better way to send money
              </h3>
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                JavaScript関連
              </p>
            </div>

            <div className="mt-10">
              <ul className="">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">〇〇</div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        JavaScript関連
                      </h4>
                      <a href="https://sugomori.herokuapp.com/feed">
                        <img src="/images/portfolio/sugomori_index.png" />
                      </a>
                      <a href="https://sugomori.herokuapp.com/">
                        <img src="/images/portfolio/sugomori_about.png" />
                      </a>

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
