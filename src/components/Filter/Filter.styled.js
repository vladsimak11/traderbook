import styled from 'styled-components';

export const FilterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Label = styled.label`
  gap: 10px;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 450px;
  height: 25px;
  border: 2px solid #c1c1c1;
  padding: 5px 0px 5px 10px;
  outline: none;
  margin-left: 10px;

  &:focus {
    border: 2px solid #2EE59D;
  }

  @media screen and (max-width: 480px) {
    width: 280px;
    margin-top: 10px;
  }
`;
