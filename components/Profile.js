// import React from "react";
import React, { Component } from "react";
import { IconContext } from "react-icons";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { IconName } from "react-icons/si";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import { NavHashLink as NavLink } from "react-router-hash-link";
export const Profile = () => {
  configureAnchors({ offset: 1250, scrollDuration: 1000 });
  return (
    <section className="text-gray-700">
      {/* <ScrollableAnchor id={"profile-target"}> */}
      {/* <div className="h-24"></div> */}
      <div className="target-div"></div>
      {/* </ScrollableAnchor> */}
      <div className="container px-5 pt-40 pb-24 mx-auto flex flex-col">
        <div className=" mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center ">
                <img
                  src="/images/profile-image-sketch-face.png"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium  my-4 text-lg">青山 有久都</h2>
                <div className="flex flex-">
                  <h3>
                    <a href="https://twitter.com/ao_uzuuzu">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                          color: "white",
                          className: "icon twitter-icon rounded-lg",
                        }}
                      >
                        <AiOutlineTwitter />
                      </IconContext.Provider>
                    </a>
                    <a href="https://qiita.com/_AoAo_">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                          color: "white",
                          className: "icon qiita-icon rounded-lg",
                        }}
                      >
                        <SiQiita />
                      </IconContext.Provider>
                    </a>
                    <a href="https://github.com/aa-0921">
                      <IconContext.Provider
                        value={{
                          size: "2rem",
                          color: "white",
                          className: "icon github-icon rounded-lg",
                        }}
                      >
                        <FaGithubSquare />
                      </IconContext.Provider>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
              id="profile-target"
            >
              <p className="leading-relaxed text-lg mb-4">
                <h2 className="profile-title mt-2 text-base leading-8 font-extrabold tracking-tight  sm:text-3xl sm:leading-10 mb-4">
                  自己紹介
                </h2>
                <div className="profile-text">
                  1990年9月生まれ / 30歳
                  <br />
                  兵庫県出身で、現在は神奈川県在住です。
                </div>
                <div className="h-6"></div>
                <h2 className="profile-title mt-2 text-base leading-8 font-extrabold tracking-tight sm:text-3xl sm:leading-10 mb-4">
                  経歴
                </h2>
                <div className="profile-text">
                  〜2013年3月 関西学院大学商学部 卒業
                  <br />
                  2013年3月〜 地元の信用金庫に入庫
                  <br />
                  <div className="h-4"></div>
                  ・営業店では約4年間勤務。特に預かり資産営業に力を入れて取り組みました。4年目には運用商品を半期で1億円以上獲得し最優秀表彰を受けました。
                  <br />
                  ・2018年1月からは本部の資金証券部に配属され、金庫の資金運用業務を担当。主に億円単位での資金繰り管理、証券会社への発注や保有株数等の管理を行う他、日々の運用状況をまとめた報告書の作成や会議資料の作成を行いました。
                  <br />
                  ・Excelにて管理する運用データから報告書を作成する日々の業務をVBAを使用し自動化しました。
                  <br />
                  ・この経験からプログラミングに関心を持ち、独学を始めて以降更に好きになり、自分に向いていると強く感じた為、エンジニアになることを決意しました。
                  <br />
                </div>
                <div className="h-4"></div>
                【エンジニアとして活かしたい強み】
                <br />
                ◆コミュニケーション力
                <br />
                前職で営業経験があり、チームのリーダーも経験した為、メンバー間でのコミュニケーションスキルも、活かすことができると考えています。
                <br />
                ◆継続力
                <br />
                日々のプログラミング学習をTwitterにて記録し、学習内容を発信してきました。一日平均10時間以上の学習を継続しております。
                <br />
                ◆発信する姿勢
                <br />
                学習内容をQiitaに投稿し、2020年9月時点で41件の記事を書きました。他にも、日々の学習の中で感じた事をTwitterで発信するように心がけております。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
