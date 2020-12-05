import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  width: 100%;
  margin: 0;
  top: 0;
  background-color: white;
  box-shadow: 0px 2px 15px -5px #555555;
`;

const MenuItemList = styled.ul`
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

const NavLogInItem = styled(NavMenuItem)`
  background-color: #479eb9;

  & > a {
    color: #fff;

    &.active {
      color: #333;
    }
  }
`;

const Logo = styled(NavLogInItem)`
  background-color: #fff;

  & > a {
    color: #333;
  }
`;

const Menu = () => (
  <StyledMenu>
    <MenuItemList>
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
        <NavLink exact to="/kontakt-oss" activeClassName="active">
          Kontakt
        </NavLink>
      </NavMenuItem>
      <NavLogInItem>
        <NavLink exact to="/login" activeClassName="active">
          Logg inn
        </NavLink>
      </NavLogInItem>
    </MenuItemList>
  </StyledMenu>
);

export default Menu;
