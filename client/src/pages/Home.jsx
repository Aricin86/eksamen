import React from 'react';
import Banner from '../components/Banner';
import {
  HomeWrapper,
  OfficeSection,
  ContactSection,
  ArticlesSection,
  TitleText,
} from '../styled/Styled';

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
