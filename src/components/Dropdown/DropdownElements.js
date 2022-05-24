import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const DropdownMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  right: 0;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownLi = styled.li`
  height: 80px;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
    height: 40px;
  }
`;

export const DropdownLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  left: 20px;
  color: #ab9b8c;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: #e5e1dc;
  }
`;
