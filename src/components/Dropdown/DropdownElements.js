import styled from 'styled-components';

export const DropdownContent = styled.div`
  display: none;
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
