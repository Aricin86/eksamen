import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  margin: 0;
  box-shadow: 0px 2px 15px -5px #555555;
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0 auto;
  list-style: none;
  align-items: center;
`;

const NavMenuItem = styled.li`
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

const NavLogInItem = styled.li`
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: #fff;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: #000;
    }
  }
`;

const Logo = styled.li`
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
  }
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <Logo>
        <NavLink exact to="/" activeClassName="active">
          LG Rørleggerservice AS
        </NavLink>
      </Logo>
      <NavMenuItem style={{ marginLeft: 'auto' }}>
        <NavLink exact to="/" activeClassName="active">
          Hjem
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/kontorer" activeClassName="active">
          Kontorer
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/fagartikler" activeClassName="active">
          Fagartikler
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/kontakt" activeClassName="active">
          Kontakt
        </NavLink>
      </NavMenuItem>
      <NavLogInItem style={{ backgroundColor: '#479eb9' }}>
        <NavLink exact to="/logginn" activeClassName="active">
          Logg inn
        </NavLink>
      </NavLogInItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
