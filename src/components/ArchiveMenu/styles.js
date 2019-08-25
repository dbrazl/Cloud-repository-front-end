import styled from 'styled-components';
import { lighten, darken } from 'polished';

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

  a,
  button {
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
  width: 500px;
  height: 200px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    #input-field {
      display: flex;
      align-items: center;
      flex-direction: row;

      p {
        font-size: 15px;
        border-right: 2px solid #fff;
        background: ${darken(0.05, '#eee')};
        color: #808080;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 13px;
      }

      input {
        text-align: center;
        height: 44px;
        width: 300px;
        background: #eee;
        padding: 0 10px;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }

    #buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      width: 100%;
      margin-top: 20px;

      button {
        width: 188px;
        height: 44px;
        margin: 0 10px;
        transition: background 0.2s;
      }
      #cancel {
        background: #fff;
        color: #ff5555;
        border: 1px solid #ff5555;
        border-radius: 5px;

        &:hover {
          background: #ff5555;
          color: #fff;
        }
      }

      #confirm {
        background: #5fd38d;
        color: #fff;
        border: none;
        border-radius: 5px;

        &:hover {
          background: ${darken(0.08, '#5fd38d')};
          color: #fff;
        }
      }
    }
  }
`;
