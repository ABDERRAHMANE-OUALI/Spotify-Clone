import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBarOption from "./SideBarOption";
import PlayList from "./PlayList";
import { useDataLayer } from "./../Hooks/DataLayer";

function SideBar(props) {
  const [{ playlists }, dispatch] = useDataLayer();
  const option = [
    { title: "Home", icon: HomeIcon },
    { title: "Search", icon: SearchIcon },
    { title: "Your Libary", icon: LibraryMusicIcon },
  ];
  return (
    <div className="SideBar">
      <img
        className="SideBar__Logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="Spotify"
      />
      {option.map((opt) => (
        <SideBarOption key={opt.title} opt={opt} />
      ))}
      <br />
      <strong className="SideBar__Title">PlayList</strong>
      <hr />
      <div className="SideBar__Playlist">
        {playlists.items &&
          playlists?.items.map((pl) => (
            <PlayList key={pl.name} playlist={pl} />
          ))}
      </div>
    </div>
  );
}

export default SideBar;
