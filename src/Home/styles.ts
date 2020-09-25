import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2.5rem;
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
    padding: 0.375rem 0.75rem;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const Filter = styled.div`

  form {
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  @media(max-width: 375px ) {
    flex-direction: column;
  }

  }

  .field-group {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  div + div {
    margin-left: 10px;

    @media(max-width: 375px ) {
      margin-left: 0px;
      margin-top: 10px;
  }
  }


  label {
    color: #c9c9c9;
    font-weight: bold;
  }

  select {
    margin-top: 8px;
    display: block;
    width: 100%;
    height: 40px;
    padding: 0.375rem 0.75rem;
    color: #3a3a3a;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 8px;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  .DayPickerInput {
    width: 100%;
    height: 40px;
    color: #c9c9c9;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 8px;
    margin-top: 8px;

    input {
      text-align: center;
      width: 100%;
      height: 40px;
      padding: 0.375rem 0.75rem;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;

    }
  }

  .field-group-button {
    margin-left: 10px;
    align-self: flex-end;

    button {
      cursor: pointer;
      width: 100%;
      height: 40px;
      background-color: #34CB79;
      border: none;
      border-radius: 8px;
      color: #fff;
      margin-top: 8px;
      padding: 10px;
    }
  }

`;


