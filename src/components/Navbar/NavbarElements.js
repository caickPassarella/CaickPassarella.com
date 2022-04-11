import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
  background: #F7F7F7;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  display:flex;
  justify-self: flex-start;
  color: #AB9B8C;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  margin-left: 2.4rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #AB9B8C;
  }
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
  display: none;
}
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: #AB9B8C;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

//Color of the selected link, at the bottom.
&.active {
  border-bottom: 3px solid #01bf71;
}
`;


// Add roboto-slab font to all fonts
// Last thing done:
// - Add more NavBar menus
// - Add to the doc the Navbar menus (about, discove, etc)
