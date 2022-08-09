import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  bottom: 0;
  margin-top: 80px;
  height: 350px;
  background-color: #424242;
`;

export const FooterTitle = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-weight: bolder;
  letter-spacing: 2px;
`;

export const FooterContent = styled.p`
  color: #ffffff;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

export const FooterSubContent = styled.p`
  color: #ffffff;
  padding: 2px;
  letter-spacing: 2px;
  font-size: 12px;
`;

export const FooterDivider = styled.hr`
  border-top: 0 solid #ffffff;
  opacity: 50%;
  width: 50%;
  margin: 25px;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 50%;
`;
