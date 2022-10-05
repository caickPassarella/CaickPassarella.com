import styled, { keyframes } from 'styled-components';

export const InfoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 100px 100px 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 50px 200px;

  @media screen and (max-width: 950px) {
    padding: 0 30px 200px;
  }
`;

const floating = keyframes`
from {transform: translateY(0px);}
to {transform: translateY(10px);}
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoImage = styled.img`
  width: ${(props) => (props.title ? '1000px' : '500px')};
  animation-name: ${floating};
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1.2s;

  @media screen and (max-width: 1700px) {
    width: ${(props) => (props.title ? '800px' : '400px')};
  }

  @media screen and (max-width: 1500px) {
    width: ${(props) => (props.title ? '700px' : '400px')};
  }

  @media screen and (max-width: 1350px) {
    width: ${(props) => (props.title ? '600px' : '400px')};
  }

  @media screen and (max-width: 1150px) {
    width: ${(props) => (props.title ? '500px' : '350px')};
  }

  @media screen and (max-width: 950px) {
    width: ${(props) => (props.title ? '400px' : '300px')};
  }

  @media screen and (max-width: 700px) {
    width: ${(props) => (props.title ? '350px' : '250px')};
  }
`;

export const ImageShadow = styled.hr`
  width: 350px;
  height: 35px;
  margin-top: 52px;
  opacity: 30%;
  background-color: grey;
  border-radius: 50%;
  filter: blur(12px);

  @media screen and (max-width: 1150px) {
    width: 300px;
  }

  @media screen and (max-width: 950px) {
    width: 200px;
  }
`;
