import React from "react";

function PlayList({playlist}) {
  return (
    <div className="SideBarPlaylist__Item">
      <p>{playlist.name}</p>
    </div>
  );
}

export default PlayList;
