import styled from 'styled-components';

export const ParagraphWrapper = styled.div`
  padding: 20px;
`;

export const ParagraphHeader = styled.h1`
  color: #424242;
  letter-spacing: 2px;
  font-size: 20px;
  white-space: pre-line;

  @media screen and (max-width: 950px) {
    font-size: 18px;
  }
`;

export const ParagraphSubTitle = styled.h2`
  color: #424242;
  font-size: 28px;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0.1em;

  @media screen and (max-width: 1000px) {
    font-size: 21px;
  }

  @media screen and (max-width: 750px) {
    font-size: 17px;
  }
`;

export const ParagraphTitle = styled(ParagraphHeader)`
  color: #424242;
  font-size: 95px;
  font-weight: bolder;
  font-style: normal;
  letter-spacing: 0.1em;
  @media screen and (max-width: 1700px) {
    font-size: 80px;
  }

  @media screen and (max-width: 1500px) {
    font-size: 70px;
  }

  @media screen and (max-width: 1350px) {
    font-size: 60px;
  }

  @media screen and (max-width: 950px) {
    font-size: 50px;
  }

  @media screen and (max-width: 750px) {
    font-size: 40px;
  }
`;

export const ParagraphText = styled.p`
  color: #424242;
  white-space: pre-line;
  padding-top: 20px;
  letter-spacing: 0.1em;
  line-height: 28px;
  font-size: 16px;
  width: 500px;

  @media screen and (max-width: 950px) {
    font-size: 14px;
    width: 400px;
  }

  @media screen and (max-width: 750px) {
    font-size: 12px;
    width: 350px;
  }
`;
