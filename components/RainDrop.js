import React, { useEffect } from "react";

import $ from "jquery";
import useScript from "../hooks/useScript";

export const RainDrop = () => {
  const $ = require("jquery");
  useScript("./raindrops.js");
  useEffect(() => {
    $(function () {
      $("#rain-drop").raindrops({
        color: "#999",
        rippleSpeed: 0.2,
        canvasHeight: 100,
      });
    });
  }, []);

  return (
    <>
      {/* <script src="raindrops.js"></script> */}
      <div id="rain-drop"></div>
    </>
  );
};
