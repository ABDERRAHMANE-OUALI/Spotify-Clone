import React, { useEffect } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { useDataLayer } from "./../Hooks/DataLayer";
import BodySong from "./BodySong";
import { spotify } from "../services/spotify";

function BodyMain(props) {
  const [{ weekly_discover, playlists }, dispatch] = useDataLayer();
  const id = playlists?.items && playlists?.items[1].id;
  console.log(id);
  useEffect(() => {
    spotify.getPlaylist(id).then((weekly_discover) =>
      dispatch({
        type: "SET_WEEKLY",
        weekly_discover,
      })
    );
  }, [id]);
  return (
    <div>
      <div className="BodyMain">
        <img
          src={weekly_discover?.images[0]?.url}
          alt="song"
          className="BodyMain__img"
        />
        <div className="Body__infoText">
          <strong>PLayList</strong>
          <h4>Weekly Discover</h4>
          <p>{weekly_discover?.description}</p>
        </div>
      </div>
      <div className="Body__song">
        <div className="Body__icons">
          <PlayCircleFilledIcon className="Body__shuffle" />
          <FavoriteIcon />
          <MoreHorizIcon fontSize="large" />
        </div>

        {/* List of Song */}
        {weekly_discover?.tracks?.items.length !== 0 ? (
          weekly_discover?.tracks?.items.map((item, index) => (
            <BodySong key={index} track={item?.track} />
          ))
        ) : (
          <div className="Song__Notfound">
            <DonutLargeIcon className="NotFound__icon" />
            <h1>It's a Bit Empty here...</h1>
            <h4>Add some songs for your playlist in the Real Spotify App</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default BodyMain;
