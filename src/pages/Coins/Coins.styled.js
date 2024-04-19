import styled from 'styled-components';

export const Header1= styled.h1`
  text-align: center;
  margin-bottom: 25px;
`;

export const Header2= styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;

export const MainBlock= styled.div`
  width: 1000px;
  max-height: 580px; 
  overflow-y: auto; 
  background-color: #EDEDED;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 8px solid var(--light-green);
  border-radius: 10px;
  margin-top: 80px;

  @media screen and (max-width: 480px) {
    padding: 10px;
    width: 300px;
    max-height: 550px;
  }

  @media screen and (max-width: 768px) {
    width: 700px;
    max-height: 500px;
  }
`;
