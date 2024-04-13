import styled, { keyframes } from 'styled-components';
import { colors } from '../../components/variables';

const { darkBlue, lightGray, lightGreen } = colors;

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
  width: 700px;
  height: 80px;
  background-color: ${lightGray};
  color: ${darkBlue};
  padding: 30px 20px 30px 20px;
  border: 2px solid ${darkBlue};
  border-radius: 10px;
  margin-top: 250px;
`;

export const Header1= styled.h1`
  font-size: 3rem;
  overflow: hidden; 
  border-right: .15em solid ${lightGreen};
  white-space: nowrap;
  margin: 0 auto;
  animation: 
   ${typing} 3.5s steps(40, end),
  ${blinkCaret} .75s step-end infinite;
`;
