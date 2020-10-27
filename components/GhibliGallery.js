import React, { useEffect } from "react";

export const GhibliGallery = () => {
  return (
    <li>
      <div className="flex">
        <div className="ml-4" id="todo-target">
          {/* <littleWave /> */}
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-4">
            GhibliGallery
          </h3>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <a
                href="https://ghibli-picture.vercel.app/"
                className="sugomori-image-wrap"
              >
                <div className="img-wave-div">
                  <span className="img-wave"></span>
                  <img src="/images/ghibli.gif" />
                </div>
              </a>
            </div>
            <div className="flex flex-col ml-10">
              <h3 className=" portfolio-text mt-2 text-xl leading-8 font-extrabold tracking-tight  sm:text-xl sm:leading-10">
                ←アプリへのリンク
              </h3>
              <div className="portfolio-subtext">
                <p className="mt-2 text-base leading-6 ">
                  JavaScript学習の為、Sliderのライブラリを複数組み合わせて活用し、最近提供が開始されたジブリの場面写真のギャラリーを作成しました。
                  <br />
                  JSでimgタグの表示を制御している部分などがあり、ライブラリを組み合わせることは想定していたよりも難しかったです。。
                </p>
              </div>
              <a
                href="https://ghibli-picture.vercel.app/"
                className="sugomori-image-wrap mt-2 text-blue-700"
              >
                https://ghibli-picture.vercel.app/
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
