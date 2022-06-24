import styled from 'styled-components';

export const ParagraphWrapper = styled.div`
  margin-right: auto;
`;

export const ReverseParagraphWrapper = styled.div`
  margin-left: auto;
  text-align: end;
`;

export const ParagraphHeader = styled.h1`
  color: #9f9182;
  line-height: 138%;
  letter-spacing: 2px;
  font-size: 35px;
  white-space: pre-line;
`;

export const ParagraphTitle = styled(ParagraphHeader)`
  font-size: 75px;
`;

export const ParagraphText = styled.p`
  color: #9f9182;
  line-height: 35px;
  font-size: 25px;
  width: 650px;
`;
