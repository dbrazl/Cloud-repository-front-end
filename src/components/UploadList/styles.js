import styled from 'styled-components';
// import style from '~/global/style';

export const Container = styled.div`
  display: ${props => props.close && 'none'};
  width: 400px;
  height: ${props => (props.hide ? '40px' : '400px')};
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 10px;

  position: fixed;
  bottom: 20px;
  right: 20px;

  ul {
    display: ${props => props.hide && 'none'};
    height: 350px;
  }

  #menu {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      font-size: 20px;
    }
  }
`;

export const Hide = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;

  &:hover {
    color: #2a77ff;
  }
`;

export const Close = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;

  &:hover {
    color: #ff5555;
  }
`;

export const UploadFile = styled.li.attrs(props => ({
  key: props.key,
}))`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    div {
      margin-left: 10px;
      display: block;

      p {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    img {
      height: 50px;
      width: 50px;
    }

    a:hover {
      color: #2a77ff;
    }
  }
`;
