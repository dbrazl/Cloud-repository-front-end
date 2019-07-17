import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #fdfdfd;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 450px;
  height: 600px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 100px;
  }

  form {
    margin-top: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
      height: 44px;
      width: 200px;
      border-width: 0;
      border-bottom: 1px solid #000;
      text-align: center;
      margin-top: 20px;

      &::placeholder {
        color: #000;
      }
    }

    span {
      color: #ff5555;
      margin-top: 10px;
    }

    button {
      width: 150px;
      height: 36px;
      margin: 0 20px;
      background: ${darken(0.08, '#FFF')};
      border: 1px solid #eee;
      border-radius: 5px;
      margin-top: 50px;
      margin-bottom: 30px;

      &:hover {
        background: ${darken(0.15, '#fff')};
      }
    }

    #singin:hover {
      background: #5fd38d;
      color: #fff;
    }

    #singup:hover {
      background: #ff5555;
      color: #fff;
    }

    #restore:hover {
      background: #2a77ff;
      color: #fff;
    }

    a {
      color: rgba(0, 0, 0, 0.5);

      &:hover {
        color: #000;
      }
    }

    p {
      margin-top: 50px;
    }
  }
`;
