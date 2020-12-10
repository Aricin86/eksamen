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

// * ARTICLE LIST
export const Container = styled.section`
  width: 70%;
  margin: 40px auto 70px auto;
`;

export const ArticleHeader = styled.header`
  display: grid;
  grid-column: 1/3;
  grid-row: 1;
  height: 50px;

  & > a {
    grid-column: 1;
    grid-row: 1;
    width: 150px;
    text-align: center;
  }

  & > select {
    grid-row: 1;
    grid-column: 3;
    width: 150px;

    justify-self: right;
  }

  & > input {
    grid-row: 1;
    grid-column: 2;
    width: 250px;
    justify-self: right;
    margin: 0 10px;
  }
`;

export const StyledArticleListed = styled.article`
  padding-top: 60px;

  & > a {
    text-decoration: none;

    & > h4 {
      grid-column: 2;
      grid-row: 1;
      margin: 0;

      :visited {
        color: black;
      }
    }
  }

  & div#bilde {
    width: 150px;
    height: 100px;
    float: left;
    margin-right: 20px;
    background-color: grey;
    vertical-align: text-top;
  }

  & > h5 {
    float: right;
    font-size: 1.5rem;
    margin-top: -25px;
  }

  & > p {
    display: grid;
  }
`;

export const ArticleListTitle = styled.h4`
  margin: 0;
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
    grid-column: 2;
    justify-self: right;
  }
`;

// * Home page
export const HomeWrapper = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / auto;
  text-align: center;
`;

export const HomeSections = styled.a`
  background-color: #f5f5f5;
  text-decoration: none;
  color: #1c1c21;

  :visited {
    color: #1c1c21;
  }
`;

export const OfficeSection = styled(HomeSections)`
  grid-row: 2;
  grid-column: 1 / 2;
  margin: 0 20px 20px 40px;
`;

export const ContactSection = styled(HomeSections)`
  grid-row: 2;
  grid-column: 2 / 4;
  margin: 0 40px 20px 20px;
`;

export const ArticlesSection = styled(HomeSections)`
  grid-row: 3;
  grid-column: 1 / 4;
  margin: 20px 40px 40px 40px;
`;

export const TitleText = styled.h1`
  text-align: center;
  padding: 160px 0;
  font-size: 36px;
`;

// * Background image in NoMatch page
export const BackgroundImage = styled.img`
  width: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

// * Offices
export const CardSection = styled.section`
  margin: 0 auto 40px auto;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  text-decoration: none;
`;

export const ListSection = styled.section`
  width: 70%;
  margin: 0 auto 40px auto;
`;

export const SearchInput = styled.input`
  height: 30px;
  width: 250px;
  margin: 3px 10px;
  padding: 5px;
  border: 1px solid #479eb9;
  border-radius: 0;
`;

export const Icons = styled.a`
  color: #333;
  margin: 0 10px;

  &:hover {
    color: #479eb9;
  }
`;

export const UserInput = styled.header`
  display: flex;
  width: 85%;
  margin: 80px auto 10px auto;
  justify-content: flex-end;
`;

// * RegisterForm
export const StyledRegisterMain = styled.main`
  width: 40%;
  margin: 0 auto;
`;

export const StyledRegisterForm = styled.form`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  & > label {
    margin-top: 30px;
    grid-column: 1/2;
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
      resize: none;
      height: 150px;
    }
  }
  & > button {
    margin-top: 30px;
    grid-row: 4;
    justify-self: right;
  }
`;

// * CardOffices
// export const StyledLink = styled(Link)`
//   text-decoration: none;

//   &:visited {
//     color: black;
//   }
// `;

export const StyledCard = styled.section`
  list-style: none;
  border: 1px solid black;
  padding: 10px;
  display: inline-grid;
  /* width: 80%; */
  min-width: 250px;
`;

export const StyledTitle = styled.h4`
  margin: 0;
`;

// * ContactForm
export const StyledContactMain = styled.section`
  width: 40%;
  margin: 0 auto;
`;

export const StyledContactForm = styled.form`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  & > label {
    margin-top: 30px;
    grid-column: 1/2;
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
      resize: none;
      height: 150px;
    }
  }
  & > button {
    margin-top: 30px;
    grid-row: 3;
    justify-self: right;
  }
`;

// * Footer
export const FooterWrapper = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  /* margin-top: 40px; */
  /* position: fixed; */
  background-color: #479eb9;
  display: flex;
  justify-content: center;
`;

export const FooterItem = styled.p`
  color: #fff;
  margin: 20px;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin: 20px;
  text-decoration: none;
`;

// * ListOffices

export const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 1fr;
  padding: 0;
  align-items: baseline;
`;

export const StyledNumber = styled.p`
  background-color: black;
  color: white;
  padding: 6px 10px;
  margin-right: 10px;
  text-align: center;
`;

export const StyledListTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

// * MENU
export const StyledMenu = styled.nav`
  width: 100%;
  margin: 0;
  top: 0;
  background-color: white;
  box-shadow: 0px 2px 15px -5px #555555;
`;

export const MenuItemList = styled.ul`
  display: flex;
  margin: 0 auto;
  list-style: none;
  align-items: center;
`;

export const NavMenuItem = styled.li`
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: #479eb9;
    }
  }
`;

export const NavLogInItem = styled(NavMenuItem)`
  background-color: #479eb9;

  & > a {
    color: #fff;

    &.active {
      color: #333;
    }
  }
`;

export const Logo = styled(NavLogInItem)`
  background-color: #fff;

  & > a {
    color: #333;
  }
`;

// * MODAL
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #d5d5d5;
  opacity: 0.7;
  z-index: 10;
`;

export const ModalStyled = styled.section`
  position: absolute;
  margin: -50% 25%;
  background-color: white;
  border-radius: 0.25rem;
  width: 500px;
  min-height: 200px;
  box-shadow: 0px 1px 8px #00000029;
  z-index: 20;

  & > p {
    text-align: center;
    padding-bottom: 30px;
  }
`;

export const ModalContent = styled.form`
  padding: 30px;
  display: grid;

  & > label {
    display: grid;
    font-weight: bold;

    & > input {
      margin-top: 5px;
      padding: 0 10px;
      min-height: 50px;
      border: 1px solid #479eb9;
      border-radius: 5px;
    }
  }

  & > button {
    margin-top: 20px;
    justify-self: right;
  }
`;

// export const ModalStyled = styled.div`
//   position: fixed;
//   display: block;
//   overflow: auto;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 10;
// `;

// export const ModalContent = styled.div`
//   margin: 15% auto;
//   background-color: white;
//   border-radius: 0.25rem;
//   width: 500px;
//   height: 200px;
//   padding: 2rem;
//   position: relative;
//   z-index: 999;

//   & > label {
//     margin-top: 30px;
//     display: flex;
//     font-weight: bold;
//     align-items: center;
//     text-align: right;

//     & > input {
//       margin: 5px 0 0 20px;
//       padding: 0 10px;
//       min-height: 50px;
//       width: 300px;
//       border: 1px solid #479eb9;
//       border-radius: 5px;
//     }
//   }

//   & > button {
//     float: right;
//     margin: 10px 34px;
//   }
// `;

export const StyledOfficeDetailed = styled.section`
  margin: 40px auto;
  width: 90%;

  & > h2 {
    margin-top: 0;
  }
`;

export const StyledArticleDetailed = styled.section`
  margin: 40px auto;
  width: 90%;

  & > button {
    margin-right: 10px;
  }
`;

export const ArticleDate = styled.p`
  grid-row: 1;
  font-weight: bold;
  text-align: end;
`;

export const ArticleAuthor = styled.p`
  grid-row: 1;
  font-weight: bold;
`;

export const ArticleDetailedHeader = styled.header`
  display: grid;
  width: 100%;
  vertical-align: top;
  margin-bottom: 30px;
`;
