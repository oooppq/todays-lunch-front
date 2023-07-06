import styled from 'styled-components';

export const commonPageContainerStyle = '20px 20px';

export const mainColor = '#ff7f00';

export const ShareModalBtnContainer = styled.button`
  img {
    width: 25px;
    height: 25px;
  }
`;

export const ShareModalContainer = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  .modalInner {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 170px;
    // padding: 20px;
    background-color: white;
    border-radius: 10px;
    .title {
      font-family: Pretendard-SemiBold;
      margin: 15px 0 10px 0;
      padding-left: 15px;
      padding-bottom: 10px;

      border-bottom: 1px solid #d7d7d7;
    }
    .closeBtn {
      position: absolute;
      top: 15px;
      right: 15px;
      img {
        width: 13px;
      }
    }
    .shareInnerBtn {
      margin-bottom: 15px;
      display: flex;
      margin-left: 20px;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }
  }
`;
