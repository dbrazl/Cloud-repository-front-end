import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  padding-right: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: blue;
    border: 5px solid #fff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  }

  input {
    display: none;
  }
`;
