import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  display: flex;
  align-items: center;

  header {
    min-width: 80%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background: none;
    border: none;
    height: 36px;
    width: 100px;
    padding: 0 10px;
    border: 1px solid #ff5555;
    border-radius: 5px;
    color: #ff5555;
    transition: background 0.2s;

    &:hover {
      background: #ff5555;
      color: #fff;
    }
  }
`;

export const ProfileMenu = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 50px;
    width: 50px;
    border: 1px solid #eee;
    border-radius: 50%;
    background: #eee;
    margin-right: 10px;

    font-size: 10px;
    text-align: center;
  }

  #profile {
    padding-right: 10px;
    padding-top: 5px;
    height: 30px;
    border-right: 1px solid #000;
    font-size: 14px;

    &:hover {
      color: #2a77ff;
    }
  }

  #repository {
    font-size: 18px;
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.5);

    &:hover {
      color: #2a77ff;
    }
  }
`;
