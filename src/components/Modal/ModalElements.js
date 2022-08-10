import styled, { keyframes } from 'styled-components';

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
  border: 1px solid #424242;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
export const ModalWrapper = styled.div``;

export const ModalTitle = styled.h1``;

export const ModalText = styled.p``;

export const ModalClose = styled.button``;

export const ModalIcon = styled.img``;
