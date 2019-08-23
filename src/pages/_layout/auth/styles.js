import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 450px;
  height: 600px;
  background: #fff;
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
      background: #eee;
      border: none;
      border-radius: 5px;
      text-align: center;
      margin-top: 20px;

      &:focus {
        border: 1px solid #2a77ff;
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

    #singin {
      background: #5fd38d;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#5fd38d')};
      }
    }

    #singup {
      background: #ff5555;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#ff5555')};
      }
    }

    #restore {
      background: #2a77ff;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#2a77ff')};
      }
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
