import React, { useEffect } from "react";

import $ from "jquery";
import useScript from "../hooks/useScript";
import { findDOMNode } from "react-dom";

export const RainDrop = () => {
  // const $ = require("jquery");
  // useScript("./raindrops.js");
  // useEffect(() => {
  //   var script = window.document.createElement("script");
  //   script.innerHTML = 'console.log("test")';
  // }
  // }, []);
  // if (process.browser) {
  //   const script = window.document.createElement("script");
  //   script.innerHTML = 'console.log("test")';
  //   document.body.appendChild(script);
  // }
  // return <>script</>;
  // const gentest = () => {

  //   const $ = require("jquery");

  //   $("#rain-drop").raindrops({
  //     color: "#999",
  //     rippleSpeed: 0.2,
  //     canvasHeight: 100,
  //   });
  // };
  // return <div id="rain-drop">{gentest()}</div>;
  const handleToggle = () => {
    const el = findDOMNode(refs.toggle);
    $(el).slideToggle();
  };

  return (
    <div onClick={handleToggle}>
      <div>rainDropTest</div>
    </div>
  );
};
