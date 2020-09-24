import React, { useEffect } from "react";
import Link from "next/link";

import Wavify from "react-wavify";

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
        <Link href="/">
          <a>PROFILE</a>
        </Link>
        <Link href="/SUGOMORI">
          <a>SUGOMORI</a>
        </Link>
        <Link href="/wave">
          <a>wave</a>
        </Link>
        <Link href="/section">
          <a>section</a>
        </Link>
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
