import React from "react";
import {Box} from './styles';

const Token = () => 
{'BQBJlLwpmyz-r8W6pM8tCs3iZ-1paoNT7hxugPwJJv55p1Wo8d8cw7dro7JanwIGuaU7PLbOLe-pQg76RBnVX9sHLRGKE88op7Kbi5qVo6SX6n6m386RbrOIEItJbjoTkBCPep2A3M92voS73IUrgObr8C0YbLFcC-I2jfoyDJA-fXERvXl9FOookV2e-CL6pw'}

const Player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(Token); },
        volume: 0.5
});

const ListenBox = () => {
    <Box> 
        <script src="https://sdk.scdn.co/spotify-player.js"/>
        <script>
        window.onSpotifyWebPlaybackSDKReady = () => {
            const token = '[My access token]';
            const player = new Spotify.Player({
                name: 'Web Playback SDK Quick Start Player',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5
  });
        </script>
    </Box>
}

export default ListenBox;