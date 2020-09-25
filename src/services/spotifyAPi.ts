import axios from 'axios';

const apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1/browse',
  headers: {
    'Authorization': 'Bearer ' + process.env.REACT_SPOTIFY_TOKEN
  },
} );

export default apiSpotify;
