import React, { useCallback, useEffect, useState, FormEvent } from 'react';
import axios from 'axios';
import logo from '../assets/logo.svg';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import apiSpotify from '../services/spotifyAPi';


import { Title, FormSearch, Filter } from './styles';
import { format } from 'date-fns';
import Playlist from '../componets/Playlist';

interface Value {
  name: string;
  value: string;
}

interface Item {
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

const Home: React.FC = () => {

  const [locale, setLocale] = useState<Value[]>([]);
  const [countries, setCountries] = useState<Value[]>([]);
  const [localeSelected, setLocaleSelected] = useState('')
  const [countrySelected, setCountrySelected] = useState('')
  const [startedDate, setStartedDate] = useState(new Date());
  const [search, setSearch] = useState('');
  const [playslist, setPlaylist] = useState<PlaylistResponse>({} as PlaylistResponse)
  const [url, setUrl] = useState('');

  useEffect(() => {
    axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776').then(response => {
      setLocale(response.data.filters[0].values);
      setCountries(response.data.filters[1].values);
    })
  },[])

  const handleStartDateChange = useCallback((start: Date) => {
    setStartedDate(start);
  }, []);


  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(countrySelected && localeSelected) {
      apiSpotify.get(`/featured-playlists?country=${countrySelected === 'en_US' ? 'US' : countrySelected}&locale=${localeSelected}&timestamp=${startedDate.toISOString()}&offset=0&limit=50`).then((response) => {
        setPlaylist(response.data);
      });
      setUrl(`/featured-playlists?country=${countrySelected === 'en_US' ? 'US' : countrySelected}&locale=${localeSelected}&timestamp=${startedDate.toISOString()}&offset=0&limit=50`)
    } else if (!countrySelected && localeSelected) {
      apiSpotify.get(`/featured-playlists?locale=${localeSelected}&timestamp=${startedDate.toISOString()}&offset=0&limit=50`).then((response) => {
        setPlaylist(response.data);
      });
      setUrl(`/featured-playlists?locale=${localeSelected}&timestamp=${startedDate.toISOString()}&offset=0&limit=50`)
    } else if (countrySelected && !localeSelected) {
      apiSpotify.get(`/featured-playlists?country=${countrySelected === 'en_US' ? 'US' : countrySelected}&timestamp=${startedDate.toISOString()}&offset=0&limit=50`).then((response) => {
        setPlaylist(response.data);
      });
      setUrl(`/featured-playlists?country=${countrySelected === 'en_US' ? 'US' : countrySelected}&timestamp=${startedDate.toISOString()}&offset=0&limit=50`)
    }
  }

    useEffect(() => {
      setInterval(() => {
        apiSpotify.get(url).then((response) => {
          setPlaylist(response.data);
        });
      }, 30000);
    }, [ url]);


  useEffect(() => {
      apiSpotify.get(`/featured-playlists?timestamp=${new Date().toISOString()}&offset=0&limit=50`).then((response) => {
        setPlaylist(response.data);
      });
      console.log(process.env.REACT_SPOTIFY_TOKEN)
    }, [])

  return (
    <>
    <img src={logo} alt="Logo spotfy"/>
    <Title>Search your playlist</Title>

    <FormSearch>
      <input
      type="search"
      placeholder="Type a playlist"
      value={search}
      onChange={ e => setSearch(e.target.value) }
      />
    </FormSearch>

    <Filter>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label htmlFor="locale">Locale</label>
            <select name="locale" id="locale" onChange={(e) => setLocaleSelected(e.target.value)}>
              <option value="">Choose option</option>
            {locale.map(loc => (
              <option key={loc.value} value={loc.value}>{loc.name}</option>
            ))}
          </select>
        </div>

        <div className="field-group">
          <label htmlFor="country">country</label>
          <select name="country" id="country" onChange={(e) => setCountrySelected(e.target.value)}>
          <option value="">Choose option</option>
          {countries.map(country => (
              <option key={country.value} value={country.value}>{country.name}</option>
            ))}
          </select>
        </div>

        <div className="field-group">
        <label>Start Date</label>
                  <DayPickerInput
                    placeholder="dd/mm/yyyy"
                    value={format(startedDate, 'dd/MM/yyyy')}
                    onDayChange={handleStartDateChange}
                  />
        </div>
        <div className="field-group-button">
          <button type="submit">Filtrar</button>
        </div>
      </form>
    </Filter>

    <Playlist filter={playslist} search={search} />

    </>
  )
};


export default Home;
