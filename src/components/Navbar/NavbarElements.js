import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  justify-content: center; //Center at main axis
  align-items: center; //Center at cross-axis
  background: #f7f7f7;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  color: #ab9b8c;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 2.4rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none; //don't display at normal desktop view

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    color: #ab9b8c;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0 35px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 35px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  color: #ab9b8c;
  text-decoration: none;
  //border-bottom: 3px solid transparent;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #9f9182;
    //text-decoration: underline;
    //text-decoration-thickness: 2px;
  }
`;
