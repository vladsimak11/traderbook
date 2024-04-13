import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../variables';

const { lightGreen } = colors;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  font-size: 25px;
  color: white;
`;

export const Link = styled(NavLink)`
color: white;
text-decoration: none;

&:hover {
  color: ${lightGreen};;
  text-decoration: underline;
}

&:active {
  color: ${lightGreen};;
}
`;

