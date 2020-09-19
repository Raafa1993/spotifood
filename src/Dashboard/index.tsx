import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.svg';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { Title, FormSearch, Form } from './styles';
import { format } from 'date-fns';
import Playlist from '../componets/Playlist';

interface Value {
  name: string;
  value: string;
}
const Dashboard: React.FC = () => {

  const [locale, setLocale] = useState<Value[]>([]);
  const [countries, setCountries] = useState<Value[]>([]);
  const [localeSelected, setLocaleSelected] = useState('')
  const [countrySelected, setCountrySelected] = useState('')
  const [startedDate, setStartedDate] = useState(new Date());

  useEffect(() => {
     axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776').then(response => {
      setLocale(response.data.filters[0].values);
      setCountries(response.data.filters[1].values);
     })
  },[])

  const handleStartDateChange = useCallback((start: Date) => {
    setStartedDate(start);
  }, []);

  return (
    <>
    <img src={logo} alt="Logo spotfy"/>
    <Title>Explore suas musicas</Title>

    <FormSearch>
      <input placeholder="Type a playlist" />
      <button type="submit">Search</button>
    </FormSearch>

    <Form>
      <label htmlFor="locale">Locale</label>
        <select name="locale" id="locale" onChange={(e) => setLocaleSelected(e.target.value)}>
        {locale.map(loc => (
          <option key={loc.value} value={loc.value}>{loc.name}</option>
        ))}
      </select>

      <label htmlFor="country">country</label>
      <select name="country" id="country" onChange={(e) => setCountrySelected(e.target.value)}>
      {countries.map(country => (
          <option key={country.value} value={country.value}>{country.name}</option>
        ))}
      </select>

      <label>Start Date</label>
                <DayPickerInput
                  placeholder="dd/mm/yyyy"
                  value={format(startedDate, 'dd/MM/yyyy')}
                  onDayChange={handleStartDateChange}
                />

    </Form>

    <Playlist filter={{localeSelected, countrySelected, startedDate}} />

    </>
  )
};

export default Dashboard;
