import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 200px;
  height: 256px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 7px 7px 6px rgba(0, 0, 0, 0.16);

  position: absolute;
  top: ${props => props && `${props.positionY}px`};
  left: ${props => props && `${props.positionX - 100}px`};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    width: 80%;
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  a {
    height: 44px;
    width: 100%;
    background: none;
    border: none;
    border-top: 1.5px solid #f0f0f0;
    color: #000;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${lighten(0.05, '#2a77ff')};
      color: #fff;
    }
  }

  p {
    color: #000;
  }
`;
