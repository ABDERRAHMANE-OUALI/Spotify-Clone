import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import { getTokenFromUrl, spotify } from "./services/spotify";
import Player from "./Components/Player";
import { useDataLayer } from './Hooks/DataLayer';
import "./styles/App.css";

function App() {
  const [{ playlists }, dispatch] = useDataLayer();
  const [keeper, setKeeper] = useState(false);
  useEffect(() => {
    const { access_token } = getTokenFromUrl();
    if (typeof access_token == "string") {
      window.location.hash = "";
      setKeeper(true);
      // dispatch({
      //   type: 'SET_TOKEN',
      //   token: access_token
      // });
      spotify.setAccessToken(access_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user
        });
      });


      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists
        });
      });
    }
  });
  return <div className="app">{keeper ? <Player /> : <Login />}</div>;
}

export default App;
