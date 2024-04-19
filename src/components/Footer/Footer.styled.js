import styled from 'styled-components';

export const FooterBlock = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-blue);
  opacity: 0.9;
  color: white;
  height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 20px;
`;
