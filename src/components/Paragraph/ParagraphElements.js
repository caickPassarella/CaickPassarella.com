import styled from 'styled-components';

export const ParagraphHeader = styled.h1`
  color: #424242;
  letter-spacing: 2px;
  font-size: 20px;
  white-space: pre-line;
`;

export const ParagraphSubTitle = styled.h2`
  color: #424242;
  font-size: 28px;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0.1em;
`;

export const ParagraphTitle = styled(ParagraphHeader)`
  color: #424242;
  font-size: 95px;
  font-weight: bolder;
  font-style: normal;
  letter-spacing: 0.1em;
`;

export const ParagraphText = styled.p`
  color: #424242;
  margin-top: 20px;
  letter-spacing: 0.1em;
  line-height: 28px;
  font-size: 16px;
  width: 500px;
`;
