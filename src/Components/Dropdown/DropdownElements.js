import styled from 'styled-components';

export const DropdownContent = styled.li`
  display: ${(props) => (props.click ? 'block' : 'none')};
  right: 0;
  height: 40px;
  right: 11px;
  //box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  text-align: center;
`;

export const DropdownLi = styled.li`
  display: inline-block;
`;

export const DropdownLinks = styled.a`
  display: flex;
  align-items: center;
  left: 20px;
  font-size: 18px;
  color: #424242;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    transition: opacity 0.2s linear;
    width: 99%;
    left: 0;
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
