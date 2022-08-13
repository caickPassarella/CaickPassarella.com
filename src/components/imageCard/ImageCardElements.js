import styled, { keyframes } from 'styled-components';

export const InfoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 235px;
  backface-visibility: hidden;
`;

const movingUp = keyframes`
  from {transform: translateY(0px);}
  to {transform: translateY(-20px);}
`;

const movingOut = keyframes`
  from {transform: translateY(-20px);}
  to {transform: translateY(0px);}
`;

export const SquareCard = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 30px;
  margin: 0 30px;
  cursor: pointer;
  animation-name: ${movingOut};
  animation-duration: 0.6s;

  &:hover {
    animation-name: ${movingUp};
    animation-fill-mode: both;
    animation-duration: 1s;
  }
`;

export const SubText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
`;
