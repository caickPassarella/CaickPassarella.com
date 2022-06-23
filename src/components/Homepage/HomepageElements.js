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

export const Divider = styled.hr`
  height: 1px;
  background-color: #9f9182;
  width: 40%;
  margin: auto;
  opacity: 50%;
`;
