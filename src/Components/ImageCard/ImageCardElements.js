import styled, { keyframes } from 'styled-components';

export const InfoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 235px;
  height: 235px;
  backface-visibility: hidden;

  @media screen and (max-width: 1070px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 800px) {
    width: 180px;
    height: 180px;
  }
`;

const MovingUp = keyframes`
  from {transform: translateY(0px);}
  to {transform: translateY(-20px);}
`;

const MovingOut = keyframes`
  from {transform: translateY(-20px);}
  to {transform: translateY(0px);}
`;

export const SquareCard = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  animation-name: ${MovingOut};
  animation-duration: 0.6s;

  &:hover {
    animation-name: ${MovingUp};
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
  padding-top: 30px;
`;
