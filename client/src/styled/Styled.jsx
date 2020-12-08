import styled from 'styled-components';

export const Button = styled.button`
  padding: 20px 30px;
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

export const Container = styled.section`
  margin: 40px 0 70px 0;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  & > header {
    grid-column: 2;
  }
  & > section {
    grid-column: 2;
  }
`;

export const FormControl = styled.div``;

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
  & > div:last-child {
    margin-top: 80px;
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    & > button {
      justify-self: center;
    }
  }
  & > p {
    margin: 30px 0 -50px 0;
    padding: 0;
    grid-column: 2;
    text-align: center;
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
    margin-top: 30px;
    grid-column: 2;
    justify-self: left;
  }
`;
