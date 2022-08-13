import styled, { keyframes } from 'styled-components';

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.5);
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const growing = keyframes`
from {transform: scale(0)}
to {transform: scale(1)}
`;

export const ModalContainer = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 12px;
  animation-name: ${growing};
  animation-duration: 0.4s;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 60px;
`;

export const ModalTitle = styled.h1`
  color: #424242;
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: 2px;
  font-size: 25px;
  margin-bottom: 50px;
`;

export const ModalText = styled.p`
  font-size: 16px;
  text-align: center;
  line-height: 25px;
  letter-spacing: 2px;
`;

export const ModalIcon = styled.img``;

export const ModalFooter = styled.p`
  color: #424242;
  padding-bottom: 20px;
  font-size: 14px;
`;
