import PropTypes from 'prop-types';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home">Home</SidebarLink>
          <SidebarLink to="resume">Resume</SidebarLink>
          <SidebarLink to="contact">Contact</SidebarLink>
          <SidebarLink to="made">How this site was made</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.string,
  toggle: PropTypes.string,
};

export default Sidebar;
