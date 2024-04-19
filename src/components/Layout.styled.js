import styled from 'styled-components';

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding-left: 25px;
  padding-right: 25px;
  height: auto;
  max-height: 100vh; 
  overflow-y: auto; 

  @media screen and (max-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
