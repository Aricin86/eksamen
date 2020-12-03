import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  /* position: fixed; */
  background-color: #479eb9;
  display: flex;
  justify-content: center;
`;

const FooterItem = styled.p`
  color: #fff;
  margin: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  margin: 20px;
  text-decoration: none;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterItem>Orgnr: 007 007 007</FooterItem>
    <FooterLink href="mailto:lg@lgror.no">lg@lgror.no</FooterLink>
    <FooterLink href="tel:004799000000">99 00 00 00</FooterLink>
  </FooterWrapper>
);

export default Footer;
