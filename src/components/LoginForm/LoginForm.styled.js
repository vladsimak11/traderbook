import styled from 'styled-components';

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  width: 480px;

  background-color: var(--dark-blue);
  border-radius: 20px;
  height: auto;
  padding: 20px;
  margin-top: 150px;

  @media screen and (max-width: 480px) {
    margin-top: 80px;
  }
`;

export const TitleLogin  = styled.p`
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: #eee;
  margin: 0 auto;
  text-transform: uppercase;
`;

export const InputLogin  = styled.input`
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 40px;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
  position: relative;
`;

export const ButtonLogin  = styled.button`
  width: 150px;
  border: none;
  background-color: var(--light-green);
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  color: white;
  border-radius: 10px;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
  margin: 0 auto;

  &:hover {
    transform: translateX(7px);
  }
`;
