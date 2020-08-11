import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";

function Player() {
  return (
    <div className="Player">
      <div className="Player__Body">
        <SideBar />
        <Body />
      </div>
      <div className="Player__Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Player;
