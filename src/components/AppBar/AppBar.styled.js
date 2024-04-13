import styled from 'styled-components';
import { colors } from '../variables';

const { darkBlue, lightGreen } = colors;

export const Header= styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${darkBlue};
  color: ${lightGreen};
  height: 80px;
  opacity: 0.9;
  padding-left: 20px;
  padding-right: 20px;
`;
