import styled from 'styled-components';

export const DetailContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f4f4f4;
`;

export const DetailTopContainer = styled.div`
  background-color: white;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  .backBtn {
    margin: 20px 0 0 16px;
  }
  .restInfo {
    margin-top: 17px;
    width: 100%;
    text-align: center;
    .restImg {
      display: block;
      width: 164px;
      height: 164px;
      margin: 0 auto;
      border-radius: 3px;
    }
    .title {
      font-size: 24px;
      margin-top: 14px;
    }
    .reviewWish {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      .reviewDiv,
      .wishDiv {
        display: flex;
        margin: 0 7px;
        color: #666666;
        img {
          margin-right: 5px;
        }
      }
    }
    .rate {
      margin-top: 3px;
      font-family: Pretendard-SemiBold;
      color: #6ab2b2;
      font-size: 32px;
    }
  }
  .navUl {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0 0 10px 0;
    margin: 15px 0 0 46px;
    .navLi {
      margin-right: 45px;
      .dish {
        object-fit: none;
        width: 50px;
        height: 37px;
      }
    }
  }
`;

export const DetailInfoContainer = styled.div`
  background-color: white;
  margin-top: 26px;
`;

export const DetailMapContainer = styled.div``;

export const DetailContributor = styled.div``;
