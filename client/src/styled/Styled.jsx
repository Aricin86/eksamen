import styled from 'styled-components';

export const Button = styled.button`
  padding: 20px;
  background: ${({ theme: { colors } }) => colors.default};
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  border: none;

  &:hover {
    background: #5bb8d4;
  }
  &:active {
    background: #398ca5;
  }
`;

export const DisabledButton = styled(Button)`
  background: ${({ theme: { colors } }) => colors.background};
`;

export const RegisterButton = styled(Button)`
  background: #d0f1d4;
  color: #1c1c21;
`;

// ! FIKSE LITT PÅ DENNE
export const Container = styled.main`
  width: 70%;
  margin: 40px auto 70px auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(auto-fill, 100px);
  & > header {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-column: 1/5;
    grid-row: 1;

    & > a {
      grid-column: 1;
      grid-row: 1;
      align-items: left;
    }

    & > select {
      grid-column: 4;
    }
  }

  input {
    grid-column: 3;
  }

  & > section {
    grid-column: 2/5;

    & #bilde {
      width: 50px;
      height: 45px;
      background-color: grey;
      grid-column: 1;
    }
  }
`;

export const StyledLoginForm = styled.form`
  margin: 40px 0 70px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  & > label {
    margin-top: 30px;
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    font-weight: bold;
    align-items: center;
    text-align: right;
    & > input {
      grid-column: 2;
      margin: 5px 0 0 20px;
      padding: 0 10px;
      min-height: 50px;
      border: 1px solid #479eb9;
      border-radius: 5px;
    }
  }
  & > div {
    margin-top: 50px;
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    & > button {
      justify-self: center;
    }
  }
`;

export const StyledArticleForm = styled.form`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  & > label {
    margin-top: 30px;
    grid-column: 2;
    display: grid;
    font-weight: bold;
    & > input {
      margin-top: 5px;
      padding: 0 10px;
      min-height: 50px;
      border-radius: 5px;
    }
    & > textarea {
      margin-top: 5px;
      padding: 10px;
      min-height: 80px;
      min-width: 100%;
      border-radius: 5px;
    }
    & > select {
      margin-top: 5px;
      padding: 0 10px;
      min-height: 50px;
      border-radius: 5px;
    }
  }
  & > div {
    margin-top: 30px;
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr auto;
    & > label {
      display: grid;
      font-weight: bold;
      & > select {
        margin-top: 5px;
        padding: 0 10px;
        min-height: 50px;
        border-radius: 5px;
      }
    }
    & > button {
      margin-left: 30px;
    }
  }
  & > button:last-child {
    grid-column: 2;
    justify-self: right;
  }
`;
