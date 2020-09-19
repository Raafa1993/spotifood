import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import apiSpotify from '../../services/spotifyAPi';

// import { Container } from './styles';

import { Container } from './styles';

interface PlayslistProps {
  filter: {
    localeSelected: string;
    countrySelected: string;
    startedDate: Date;
  }
};

interface Item{
  id: string;
  name: string;
  owner: {
    display_name: string;
  }
  external_urls: {
    spotify: string
  }
  images: any[]
  tracks: {
    total: number
  }
}

interface PlaylistResponse {
  message: string;
  playlists: {
    items: Item[]
  };
}

const Playlist: React.FC<PlayslistProps> = ({ filter }) => {

  const [playslist, setPlaylist] = useState<PlaylistResponse>({} as PlaylistResponse)

  useEffect(() => {
     apiSpotify.get(`/featured-playlists?country=US&timestamp=2020-09-19T20%3A44%3A43&offset=0&limit=50`).then((response) => {
      setPlaylist(response.data);
    });
  }, [])



  return (
  <>
    <Container>
      {playslist.playlists?.items.map(pl => (
        <a href={pl.external_urls.spotify}>
        <img
          src={pl.images[0].url}
          alt="album"
        />
        <div>
          <strong>{playslist.message}</strong>
          <p>{pl.name}</p>
          <span>{`Created by ${pl.owner.display_name} - ${pl.tracks.total}`}</span>
        </div>
      </a>
      ))}

    </Container>
  </>
)
}

export default Playlist;
