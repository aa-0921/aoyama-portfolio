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
            <a>ToDo</a>
          </div>
        </AnchorLink>
      </div>
      {/* <div className="wave-band-under">
        <Wavify
          fill="#CBE7ED"
          paused={false}
          options={{
            height: 80,
            amplitude: 3,
            speed: 0.6,
            points: 6,
          }}
        />
      </div> */}
    </div>
  );
};
