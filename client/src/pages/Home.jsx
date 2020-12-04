import React from 'react';
import styled from 'styled-components';
import BannerImage from '../images/krystian-tambur-k7rZ8wTfABA-unsplash.jpg';

const HomeWrapper = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / auto;
  text-align: center;
`;
// ? Bilde kan fjernes her
const Banner = styled.header`
  grid-row: 1;
  grid-column: 1 / 4;
  color: white;
  background-image: url(${BannerImage});
  background-color: lightgray;
  height: 400px;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    text-align: center;
    padding: 160px 0;
    font-size: 36px;
  }
`;

const HomeSections = styled.a`
  background-color: #f5f5f5;
  text-decoration: none;
  color: #1c1c21;

  :visited {
    color: #1c1c21;
  }
`;

const OfficeSection = styled(HomeSections)`
  grid-row: 2;
  grid-column: 1 / 2;
  margin: 0 20px 20px 40px;
`;

const ContactSection = styled(HomeSections)`
  grid-row: 2;
  grid-column: 2 / 4;
  margin: 0 40px 20px 20px;
`;

const ArticlesSection = styled(HomeSections)`
  grid-row: 3;
  grid-column: 1 / 4;
  margin: 20px 40px 40px 40px;
`;

const TitleText = styled.h1`
  text-align: center;
  padding: 160px 0;
  font-size: 36px;
`;

const Home = () => (
  <HomeWrapper>
    <Banner>
      <TitleText>Velkommen til LG Rørleggerservice AS</TitleText>
    </Banner>
    <OfficeSection href="/kontorer">
      <TitleText>Kontorer</TitleText>
    </OfficeSection>
    <ContactSection href="/kontakt-oss">
      <TitleText>Kontakt</TitleText>
    </ContactSection>
    <ArticlesSection href="/fagartikler">
      <TitleText>Se våre fagartikler om oppussing av bad</TitleText>
    </ArticlesSection>
  </HomeWrapper>
);
export default Home;
