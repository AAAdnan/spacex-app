import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <NavbarLink to="/">SpaceX</NavbarLink>
      </NavbarLogo>
      <NavbarLinks>
        <NavbarLinkItem>
          <NavbarLink to="/launches">Launches</NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLink to="/rockets">Rockets</NavbarLink>
        </NavbarLinkItem>
      </NavbarLinks>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const NavbarLogo = styled.div`
  a {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    margin-left: 10px;
  }
`;

const NavbarLinkItem = styled.li`
  margin-left: 40px;
  margin-right: 10px;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;

const NavbarLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
