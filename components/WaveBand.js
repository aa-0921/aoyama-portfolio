import React, { useEffect } from "react";
import Link from "next/link";

import Wavify from "react-wavify";

export const WaveBand = () => {
  return (
    <div className="wave-band-wrap relative pb-20">
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
      <div className="title flex flex-row relative text-blue-400">
        <Link href="/">
          <a>About</a>
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
  );
};
