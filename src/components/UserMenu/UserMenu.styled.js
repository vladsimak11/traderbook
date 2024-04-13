import styled from 'styled-components';
import { colors } from '../variables';

const { lightGreen } = colors;

export const UserNameBlock = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: white;
`;

export const Button = styled.button`
  width: 120px;
  border: none;
  background-color: ${lightGreen};
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  color: white;
  border-radius: 10px;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #18af73;
  }
`;
