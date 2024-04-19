import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 40px;
  border-collapse: collapse;
  width: 100%;
  margin: 25px 0;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const TheadTr = styled.tr`
  background-color: var(--light-green);
  color: #ffffff;
  text-align: center;
`;

export const Th = styled.th`
  padding: 12px 15px;
  text-align: center;

  @media screen and (max-width: 480px) {
    display: ${props => props.mobile && "none"};
    padding: 8px 12px;
  }
`;

export const Td = styled.td`
  padding: 12px 15px;
  text-align: center;

  @media screen and (max-width: 480px) {
    display: ${props => props.mobile && "none"};
    padding: 8px 12px;
  }
`;

export const TbodyTr = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid var(--dark-blue);
  }
`;

export const DeleteButton = styled.button`
  background-color: var(--light-red);
  color: white;
  border-radius: 5px;
  text-align: center;
  padding: 7px;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #da0505;
  }

`;
