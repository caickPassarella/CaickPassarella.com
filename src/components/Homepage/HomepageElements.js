import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: #f7f7f7;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

export const Subtitle = styled.h1`
  color: #424242;
  font-size: 45px;
  font-weight: bolder;
  font-style: normal;
  letter-spacing: 0.1em;
  text-align: center;
`;
