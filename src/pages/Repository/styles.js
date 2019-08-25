import styled from 'styled-components';

export const DropContainer = styled.div`
  height: 100%;
  background: ${props => props.isDragActive && '#E1EDFF'};
`;

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  ul {
    margin-top: 180px;
    width: 970px;
    height: 430px;
    margin-right: 20px;

    li {
      width: 300px;
      height: 50px;
      border-radius: 5px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      margin-left: 20px;
      background: #fff;
      display: inline-block;

      & + li {
        margin-top: 15px;
        margin-bottom: 5px;
      }

      @media (max-width: 768px) {
        width: 200px;
      }

      @media (max-width: 480px) {
        width: 100%;
        margin-left: 0px;
      }
    }

    @media (max-width: 1024px) {
      width: 640px;
    }

    @media (max-width: 768px) {
      width: 440px;
    }
  }
`;

export const Archive = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100%;
  width: 100%;
  background: none;
  border: none;

  img {
    width: 20px;
    margin-left: 20px;
    margin-right: 10px;
  }

  p {
    font-size: 16px;
    margin-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
