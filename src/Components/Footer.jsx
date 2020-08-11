import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayer } from "./../Hooks/DataLayer";

function Footer(props) {
  const [{ item }, dispatch] = useDataLayer();
  return (
    <div className="PLayerFooter__Parts">
      <div className="Footer__Left" style={{ display: "flex" }}>
        <img
          className="Footer__Img"
          src="https://lh3.googleusercontent.com/proxy/I0_00qky6OtiA146030V8L_9n60kW7GksvOOuAjloW4JkOrFYBmU1HGPWtleAadwE9owBygtY9R1jI_VD_ghO9KdjXnxUsDZxi9eBhHzz9fXnylEfr973FkUXHc"
          alt="Song Img"
        />
        <div className="Footer__left__Description">
          <p style={{ fontSize: "20px" }}>Azur lane</p>
          <p>graphite/diamond</p>
        </div>
      </div>
      <div className="Footer__center">
        <ShuffleIcon className="Footer__Green" />
        <SkipPreviousIcon className="Footer__Icon" />
        <PlayCircleOutlineIcon fontSize="large" className="Footer__Play" />
        <SkipNextIcon className="Footer__Icon" />
        <RepeatIcon className="Footer__Green" />
      </div>
      <div className="Footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider color="primary" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
