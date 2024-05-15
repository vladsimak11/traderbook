import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    margin-bottom: 25px;

  }
`;

export const FormBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  color: #f4a442;
  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  background-color: var(--dark-gray);
  border: 2px solid var(--dark-blue);
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  color: var(--dark-blue);

  @media screen and (max-width: 768px) {
    width: 100px;
  }

  @media screen and (max-width: 480px) {
    width: 190px;
  }

`;

export const ButtonBlock  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: ${props => props.buy ? "var(--light-green)" : "#da0505"};
  color: white;
  font-size: 22px;
  padding: 5px 20px 5px 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.7;
  }
`;
