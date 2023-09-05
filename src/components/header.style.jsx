import styled from 'styled-components';
import { mainColor } from '../pages/common.style';
// import logo from '../../../public/logo.png';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  margin-bottom: 22px;
  position: relative;
  .profileButton {
    position: absolute;
    top: 0;
    right: 0;
    margin: 19px 29.3px 0 0;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1.5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    .profileIcon {
      border-radius: 50%;
      // border: 1px solid black;
      height: 100%;
      width: 100%;
    }
  }
`;
// export const HeaderLogo = styled.img`
//   content: url(${logo});
//   width: 100px;
// `;

export const HeaderLogo = styled.div`
  // font-family: Pretendard-Bold;
  @font-face {
    font-family: 'KOTRA_BOLD-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  } 
  font-family:'KOTRA_BOLD-Bold';
  font-weight:100,
  width: 96px;
  height: 49px;
  margin: 22px 0 0 30px;
  font-size: 32px;
  // line-height: 37.5px;

  .second {
    // color: #6ab2b2;
    // color:${mainColor};
    color: #f59e0b;
  }
`;

export const HeaderBasketModal = styled.div``;
export const HeaderBasketIcon = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 85px 0 0;
`;

export const HeaderMyPageIcon = styled.img`
  width: 41.7px;
  height: 45.73px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 17px 29.3px 0 0;
`;
