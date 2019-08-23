import styled, { keyframes, css } from 'styled-components';

import logo from '~/assets/logo.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

export const Logo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  font-size: 100px;
  height: 100px;
  width: 100px;

  img {
    height: 50px;
    width: 50px;
    position: relative;
    left: 25px;

    ${props =>
      props.loading &&
      css`
        animation: ${rotate} 2s linear infinite;
      `};
  }
`;
