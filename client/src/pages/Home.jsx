import React from 'react';
import styled from 'styled-components';
import BannerImage from '../images/krystian-tambur-k7rZ8wTfABA-unsplash.jpg';
import Banner from '../components/Banner';
import {
  HomeWrapper,
  OfficeSection,
  ContactSection,
  ArticlesSection,
  TitleText,
} from '../styled/Styled';

// ? Bilde kan fjernes her
const ImageHeader = styled(Banner)`
  background-image: url(${BannerImage});
  background-color: lightgray;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Home = () => (
  <HomeWrapper>
    <ImageHeader>
      <TitleText>Velkommen til LG Rørleggerservice AS</TitleText>
    </ImageHeader>
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
