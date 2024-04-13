import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 450px;
  height: 25px;
  border: 2px solid #c1c1c1;
  padding: 5px 0px 5px 10px;
  outline: none;

  &:focus {
    border: 2px solid #2EE59D;
  }
`;
