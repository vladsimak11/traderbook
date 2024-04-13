import styled from 'styled-components';
import { colors } from '../variables';

const { darkBlue, lightGreen, darkGray } = colors;

export const Form = styled.form`
  margin-bottom: 40px;
`;

export const FormBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Label = styled.label`
  color: ${darkBlue};
  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  background-color: ${darkGray};
  border: 2px solid ${darkBlue};
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  color: ${darkBlue};
`;

export const Button = styled.button`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${darkBlue};
  color: ${lightGreen};
  font-size: 22px;
  padding: 5px 20px 5px 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: transparent;
    color: ${darkBlue};
    border: 2px solid ${darkBlue};
  }
`;
