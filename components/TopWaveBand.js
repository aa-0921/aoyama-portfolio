import React, { useEffect } from "react";
// import Link from "next/link";
import Wavify from "react-wavify";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink as Link } from "react-router-hash-link";
export const TopWaveBand = () => {
  return (
    <div className="wave-band-wrap absolute w-screen left-0">
      <div className="title flex flex-row justify-center relative text-blue-400 ">
        <AnchorLink href="#profile-target" offset="1">
          <div>
            <a>PROFILE</a>
          </div>
        </AnchorLink>
        <AnchorLink href="#sugomori-target">
          <div>
            <a>SUGOMORI</a>
          </div>
        </AnchorLink>
        <AnchorLink href="#todo-target">
          <div>
            <a>OtherApps</a>
          </div>
        </AnchorLink>
      </div>
    </div>
  );
};
