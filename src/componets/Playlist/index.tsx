import React from 'react';

import { Container } from './styles';
interface PlayslistProps {
  filter: PlaylistResponse;
  search: string;
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

const Playlist: React.FC<PlayslistProps> = ({ filter, search }) => {

  const filteredCountries = filter.playlists?.items.filter( pl => {
    return pl.name.toLowerCase().includes( search.toLowerCase() )
  } )

  return (
  <>
    <Container>

      {filteredCountries?.map(pl => (
        <a key={pl.name} href={pl.external_urls.spotify}>
          <img
            src={pl.images[0].url}
            alt="album"
          />
          <div>
            <strong>{filter.message}</strong>
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
