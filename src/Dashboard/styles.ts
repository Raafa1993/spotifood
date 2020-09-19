import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #C9C9C9;
  line-height: 56px;

  margin-top: 40px;
`;

export const FormSearch = styled.div`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 60px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Form = styled.div`
  margin-top: 40px;
  max-width: 700px;

  display: flex;
  flex-wrap: wrap;

  label {
    display: inline-block;
    color: #c9c9c9;
    font-weight: bold;
  }

  select {
    margin-top: 8px;
    display: block;
    width: 100%;
    height: 40px;
    color: #c9c9c9;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 8px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

`;

export const Playlist = styled.div`
  margin-top: 40px;
  max-width: 700px;

  a {
    width: 100%;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 160px;
      height: 160px;
      border-radius: 8px;
    }

    div {
      margin-left: 16px;
      padding: 5px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-self: normal;

      strong {
        font-size: 12px;
        color: #FFFFFF;
      }

      p {
        font-size: 36px;
        color: #FFFFFF;
      }

      span {
        font-size: 18px;
        color: #FFFFFF;
      }
    }
  }
`;
