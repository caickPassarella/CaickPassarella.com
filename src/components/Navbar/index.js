import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { Nav, MobileIcon, NavMenu, NavItem, NavLinks, NavLogo } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLogo>Caick Passarella</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks href="#home">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#whoAmI">Who am I</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#made">How this site was made</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.func,
};

export default Navbar;
