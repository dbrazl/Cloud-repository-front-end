import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  min-width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  width: 450px;
  height: 700px;
  border: 1px solid #eee;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100px;
    height: 100px;
    background: #eee;
    border-radius: 50%;

    text-align: center;
  }

  a {
    margin-bottom: 50px;
    display: flex;
    align-items: center;

    &:hover {
      color: #2a77ff;
    }
  }

  form {
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
      text-align: center;
      height: 44px;
      width: 200px;
      background: #eee;
      padding: 0 10px;
      margin: 20px 0;
      border: none;
      border-radius: 5px;

      &:focus {
        border: 1px solid #2a77ff;
      }
    }

    div {
      display: flex;
      align-items: center;
      padding-left: 30px;

      svg {
        position: relative;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.5);
        margin-left: 10px;
      }
    }

    button {
      width: 200px;
      height: 44px;
      background: #2a77ff;
      color: #fff;
      border: 1px solid #eee;
      border-radius: 5px;
      margin-top: 20px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#2a77ff')};
      }
    }

    #delete {
      background: none;
      color: #ff5555;
      border: 1px solid #ff5555;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 16px;
      }

      &:hover {
        background: ${darken(0.05, '#ff5555')};
        color: #fff;
      }
    }
  }
`;

export const OldPassword = styled.div`
  input {
    display: ${props => (props.visible ? 'flex' : 'none')};
  }

  svg {
    display: ${props => (props.visible ? 'flex' : 'none')};
  }
`;

export const ModalContainer = styled.div.attrs({ id: 'modal-container' })`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.16);

  display: ${props => (props.modal ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 700px;
  height: 200px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 18px;
    text-align: center;
    padding: 0 20px;
  }

  div {
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 200px;
      height: 44px;
      margin: 0 10px;
      transition: background 0.2s;
    }

    #cancel {
      background: #5fd38d;
      color: #fff;
      border: 1px solid #eee;
      border-radius: 5px;

      &:hover {
        background: ${darken(0.08, '#5fd38d')};
        color: #fff;
      }
    }

    #confirm {
      background: none;
      color: #ff5555;
      border: 1px solid #ff5555;
      border-radius: 5px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 16px;
      }

      &:hover {
        background: ${darken(0.05, '#ff5555')};
        color: #fff;
      }
    }
  }
`;
