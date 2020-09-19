import React from 'react';

import logo from '../assets/logo.svg';

import { Title, Form} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logo} alt="Logo spotfy"/>
    <Title>Explore suas musicas</Title>

    <Form>
      <input placeholder="Type a playlist" />
      <button type="submit">Search</button>
    </Form>
    </>
  )
};

export default Dashboard;
