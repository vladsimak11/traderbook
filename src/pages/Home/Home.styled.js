import styled, { keyframes } from 'styled-components';
import { colors, sizes } from '../../components/variables';

const { darkBlue, lightGray, lightGreen } = colors;
const { tablet } = sizes;

const typing = keyframes`   
from { width: 0 }
to { width: 100% }
`;

const blinkCaret = keyframes`   
from, to { border-color: transparent }
50% { border-color: ${lightGreen}; }
`;

export const HeaderBlock= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lightGray};
  color: ${darkBlue};
  border: 2px solid ${darkBlue};
  border-radius: 10px;
  width: 400px;
  padding: 15px 0 15px 0;
  margin-top: 250px;


  @media screen and (min-width: ${tablet}) {
    width: 700px;
    height: 80px;
    padding: 30px 20px 30px 20px;
    margin-top: 250px;
  }
`;

export const Header1= styled.h1`
  font-size: 1.7rem;
  overflow: hidden; 
  border-right: .15em solid ${lightGreen};
  white-space: nowrap;
  margin: 0 auto;
  animation: 
  ${typing} 3.5s steps(40, end),
  ${blinkCaret} .75s step-end infinite;

  @media screen and (min-width: ${tablet}) {
    font-size: 3rem;
  }

`;
