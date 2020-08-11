import SpotifyWebApi from "spotify-web-api-js";

export const authEndPoint = "https://accounts.spotify.com/authorize";
const clientID = "6df71fbdb34a4c2a9c4f230ac97901ba";
const redirectURI = "http://localhost:3000/"

const scopes = [
    "user-read-playback-state",
    "user-read-email",
    "user-read-private",
    "playlist-modify-public",
    "user-library-modify",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((total, item, index) => {
            let parts = item.split("=");
            total[parts[0]] = decodeURIComponent(parts[1]);
            return total;
        }, {});
}
export const spotify = new SpotifyWebApi();

export const urlLogin = `${authEndPoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join(" ")}&show_dialog=true`;
