import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const AuthNavList = styled.div`
  display: flex;
  gap: 30px;
  font-size: 25px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
    gap: 20px;
  }
`;

export const LinkRegister = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 0 auto;
  background-color: #2ee59d;
  color: white;

  &:hover {
    color: var(--light-green);
    background-color: white;
  }

`;

export const LinkLogin = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 0 auto;
  background-color: white;
  color: var(--light-green);

  &:hover {
    background-color: var(--light-green);
    color: white;
  }

`;
