import React from 'react';

import logo from '../assets/logo.svg';

import { Title, FormSearch, Form, Playlist } from './styles';

const Dashboard: React.FC = () => {
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
      <select name="locale" id="locale">
        <option value="0">select</option>
      </select>

      <label htmlFor="locale">Locale</label>
      <select name="locale" id="locale">
        <option value="0">select</option>
      </select>
    </Form>

    <Playlist>
      <a href="teste">
        <img
          src="https://images-americanas.b2w.io/produtos/01/00/item/125484/5/125484512_1GG.jpg"
          alt="album"
        />
        <div>
          <strong>Playlist</strong>
          <p>Poderosas</p>
          <span>Created by Spotify - 99 songs</span>
        </div>
      </a>

      <a href="teste">
        <img
          src="https://images-americanas.b2w.io/produtos/01/00/item/125484/5/125484512_1GG.jpg"
          alt="album"
        />
        <div>
          <strong>Playlist</strong>
          <p>Poderosas</p>
          <span>Created by Spotify - 99 songs</span>
        </div>
      </a>

      <a href="teste">
        <img
          src="https://images-americanas.b2w.io/produtos/01/00/item/125484/5/125484512_1GG.jpg"
          alt="album"
        />
        <div>
          <strong>Playlist</strong>
          <p>Poderosas</p>
          <span>Created by Spotify - 99 songs</span>
        </div>
      </a>
    </Playlist>
    </>
  )
};

export default Dashboard;
