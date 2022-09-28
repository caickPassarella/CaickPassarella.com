import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { Nav, NavMenu, NavItem, NavLinks, NavLogo } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLogo>Caick Passarella</NavLogo>
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
        <Dropdown></Dropdown>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.func,
};

export default Navbar;
