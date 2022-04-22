import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { DropdownContent, DropdownLi } from '../Dropdown/DropdownElements';
import { Dropdown } from '../Dropdown';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resume">Resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="made">How this site was made</NavLinks>
            </NavItem>
          </NavMenu>
          <Dropdown />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
