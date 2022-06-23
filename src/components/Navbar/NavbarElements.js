import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  justify-content: center; //Center at main axis
  align-items: center; //Center at cross-axis
  background: #f7f7f7;
  height: 100px;
  position: relative;
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

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 25px 0 0;
  }
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
  padding: 0 1rem;
`;

export const NavLogo = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    color: #ab9b8c;
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: 2.4rem;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  color: #ab9b8c;
  font-size: 20px;
  letter-spacing: 1.5px;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  position: relative;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      width: 100%;
      height: 3px;
      border-radius: 200px;
      border: 1px solid #9f9182;
    }
    /* border-bottom: 3px solid #9f9182; */
  }
`;
