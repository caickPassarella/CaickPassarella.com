import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { Nav, NavMenu, NavItem, NavLinks, NavLogo } from './NavbarElements';
import { useTranslation } from 'react-i18next';

const Navbar = ({ toggle }) => {
  const { t } = useTranslation();

  return (
    <>
      <Nav>
        <NavLogo>Caick Passarella</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks href="#home">{t('menu.home')}</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#whoAmI">{t('menu.who')}</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#made">{t('menu.made')}</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#contact">{t('menu.contact')}</NavLinks>
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
