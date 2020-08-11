import React from "react";

function BodySong({ track }) {
  return (
    <div className="Song__List">
      <img src={track?.album?.images[0]?.url} alt="" className="Song__Img" />
      <div className="Song__info">
        <h3>{track?.name}</h3>
        <p>
          {track?.artists.map((artist) => artist?.name).join(",   ")}
          {track?.album?.name}
        </p>
      </div>
    </div>
  );
}

export default BodySong;
