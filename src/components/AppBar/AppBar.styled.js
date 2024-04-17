import styled from 'styled-components';

export const Header= styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-blue);
  color: var(--light-green);
  height: 80px;
  opacity: 0.9;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
