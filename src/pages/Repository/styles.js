import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;

  div {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    height: 36px;
    border: 1px solid #eee;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    background: #fff;
    padding: 0 10px;

    &:hover {
      background: ${darken(0.03, '#fff')};
    }
  }
`;
