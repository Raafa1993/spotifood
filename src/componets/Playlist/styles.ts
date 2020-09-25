import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  max-width: 700px;

  a {
    width: 100%;
    text-decoration: none;

    display: flex;
    /* align-items: center; */
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
        font-size: 1rem;
        color: #FFFFFF;
      }

      p {
        font-size: 2.5rem;
        color: #FFFFFF;

      }

      span {
        font-size: 1rem;
        color: #FFFFFF;
      }
    }
  }
`;
