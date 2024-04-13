import styled from 'styled-components';
import { sizes} from './variables';

const { mobile, tablet, desktop } = sizes;

export const Section = styled.section`
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  
  @media screen and (min-width: ${mobile}) {
    max-width: ${mobile};
  }

  @media screen and (min-width: ${tablet}) {
    max-width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    max-width: ${desktop};
  }
`;
