import React from "react";
import { urlLogin } from "../services/spotify";

function Login(props) {
  return (
    <div className="Login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/640px-Spotify_logo_with_text.svg.png"
        alt=""
      />
      <a href={urlLogin}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
