import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Sugomori() {
  useEffect(() => {
    const squareTwo = document.getElementById("squareTwo");
    const squareThree = document.getElementById("squareThree");
    const squareFour = document.getElementById("squareFour");
    const squareFive = document.getElementById("squareFive");
    const squareSix = document.getElementById("squareSix");
    const squareSeven = document.getElementById("squareSeven");
    const squareEight = document.getElementById("squareEight");
    const squareNine = document.getElementById("squareNine");
    const squareTen = document.getElementById("squareTen");
    const squareEleven = document.getElementById("squareEleven");
    const squareTwelve = document.getElementById("squareTwelve");

    document.addEventListener("mousemove", (event) => {
      const posX = event.clientX - window.innerWidth / 2;
      const posY = event.clientY - window.innerHeight / 2;

      squareTwo.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      squareThree.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      squareFour.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      squareFive.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      squareSix.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      squareSeven.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      squareEight.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      squareNine.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      squareTen.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      squareEleven.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      squareTwelve.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
    });
  }, []);
  useEffect(() => {
    const square2Two = document.getElementById("square2Two");
    const square2Three = document.getElementById("square2Three");
    const square2Four = document.getElementById("square2Four");
    const square2Five = document.getElementById("square2Five");
    const square2Six = document.getElementById("square2Six");
    const square2Seven = document.getElementById("square2Seven");
    const square2Eight = document.getElementById("square2Eight");
    const square2Nine = document.getElementById("square2Nine");
    const square2Ten = document.getElementById("square2Ten");
    const square2Eleven = document.getElementById("square2Eleven");
    const square2Twelve = document.getElementById("square2Twelve");

    document.addEventListener("mousemove", (event) => {
      const posX = event.clientX - window.innerWidth / 2;
      const posY = event.clientY - window.innerHeight / 2;

      square2Two.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      square2Three.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      square2Four.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      square2Five.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      square2Six.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      square2Seven.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      square2Eight.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      square2Nine.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      square2Ten.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      square2Eleven.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
      square2Twelve.style.transform =
        "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TopWaveBand />

      <section className={utilStyles.headingMd}>
        <p>SUGOMORI</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>自己紹介？</h2>
        <ul className={utilStyles.list}></ul>
      </section>
      <section>
        <div className="field">
          <div id="container">
            <div id="squareOne">
              <div id="squareTwo">
                <div id="squareThree">
                  <div id="squareFour">
                    <div id="squareFive">
                      <div id="squareSix">
                        <div id="squareSeven">
                          <div id="squareEight">
                            <div id="squareNine">
                              <div id="squareTen">
                                <div id="squareEleven">
                                  <div id="squareTwelve"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="container2">
            <div id="square2One">
              <div id="square2Two">
                <div id="square2Three">
                  <div id="square2Four">
                    <div id="square2Five">
                      <div id="square2Six">
                        <div id="square2Seven">
                          <div id="square2Eight">
                            <div id="square2Nine">
                              <div id="square2Ten">
                                <div id="square2Eleven">
                                  <div id="square2Twelve"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
