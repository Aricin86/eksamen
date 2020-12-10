import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { logout } from '../utils/authService';
import {
  StyledMenu,
  MenuItemList,
  NavMenuItem,
  NavLogInItem,
  Logo,
} from '../styled/Styled';

const Menu = () => {
  const { isLoggedIn, setUser } = useAuthContext();
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };
  return (
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
        {!isLoggedIn && (
          <NavLogInItem>
            <NavLink exact to="/login" activeClassName="active">
              Logg inn
            </NavLink>
          </NavLogInItem>
        )}
        {isLoggedIn && (
          <NavLogInItem>
            <NavLink to="" onClick={handleLogout}>
              Logg ut
            </NavLink>
          </NavLogInItem>
        )}
      </MenuItemList>
    </StyledMenu>
  );
};

export default Menu;
