import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  height: 75px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const MobileIcon = styled.div`
  display: none; //don't display at normal desktop view

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    color: #424242;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding: 0 25px;
`;

export const NavLogo = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    color: #424242;
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
  font-size: 15px;
  color: #424242;
  letter-spacing: 1.5px;
  text-decoration: none;
  transition: color 0.2s linear;
  height: 100%;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    transition: opacity 0.2s linear;
    width: 99%;
    height: 1px;
    opacity: 0;
    border-radius: 200px;
    border: 1px solid #424242;
  }

  &:hover {
    color: #000000;
    &::after {
      opacity: 1;
      font-weight: bold;
      transition: opacity 0.2s linear;
    }
  }
`;
