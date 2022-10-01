import styled from 'styled-components';

export const NavDropDown = styled.ul`
  list-style: none inside;
  text-align: center;
`;

export const DropdownMenu = styled(NavDropDown)`
  z-index: 1;
  position: absolute;
  display: ${(props) => (props.click ? 'block' : 'none')};
`;

export const DropdownContent = styled.li`
  display: block;
  position: relative;
  z-index: 1;
`;

export const DropdownLi = styled(DropdownContent)`
  padding-top: 20px;
`;

export const DropdownLinks = styled.a`
  display: flex;
  justify-content: center;
  font-size: 18px;
  width: 200px;
  color: #424242;
  text-decoration: none;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    transition: opacity 0.2s linear;
    width: 45%;
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
