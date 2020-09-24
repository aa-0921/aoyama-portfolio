import React, { useEffect } from "react";
import Link from "next/link";
import Wavify from "react-wavify";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const TopWaveBand = () => {
  return (
    <div className="wave-band-wrap absolute pb-20 w-screen left-0">
      <Wavify
        fill="#CBE7ED"
        paused={false}
        options={{
          height: 120,
          amplitude: 5,
          speed: 0.45,
          points: 4,
        }}
      />
      <div className="title flex flex-row justify-center relative text-blue-400 ">
        <AnchorLink href="#profile-target" offset="1">
          <a>PROFILE</a>
        </AnchorLink>
        <AnchorLink href="#sugomori-target">
          <a>SUGOMORI</a>
        </AnchorLink>
        <AnchorLink href="#todo-target">
          <a>ToDo</a>
        </AnchorLink>
      </div>
      <div className="wave-band-under">
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
      </div>
    </div>
  );
};
