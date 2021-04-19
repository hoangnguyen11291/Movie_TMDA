import React from "react";
import NowPlaying from "./NowPlaying";
import TopRated from "./TopRated";
import TopTrending from "./TopTrending";

const Homepage = () => {
  return (
    <div>
      <NowPlaying />
      <TopTrending />
      <TopRated />
    </div>
  );
};

export default Homepage;
