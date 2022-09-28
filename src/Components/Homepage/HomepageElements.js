import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    padding: 100px;
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

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Paragraph = styled.p`
  color: #424242;
  white-space: pre-line;
  margin-top: 20px;
  letter-spacing: 0.1em;
  line-height: 28px;
  font-size: 16px;
  width: 1000px;
  text-align: center;
`;

export const Subtitle = styled.h1`
  color: #424242;
  font-size: 45px;
  font-weight: bolder;
  font-style: normal;
  letter-spacing: 0.1em;
  text-align: center;
`;
