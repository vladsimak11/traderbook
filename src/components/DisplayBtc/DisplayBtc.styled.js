import styled from 'styled-components';

export const BtcBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7f9fa;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

`;

export const BtcName = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: var(--light-green);
  margin-right: 15px;

`;

export const BtcValue = styled.p`
  font-size: 20px;
  color: var(--dark-blue);

`;