import styled from 'styled-components';
import { mainColor } from '../pages/common.style';
// import logo from '../../../public/logo.png';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  text-align: left;
  padding: 15px 0 5px 0;
  position: relative;
`;
// export const HeaderLogo = styled.img`
//   content: url(${logo});
//   width: 100px;
// `;

export const HeaderLogo = styled.div`
  font-family: 'KOTRA_BOLD-Bold';
  width: 100px;
  height: 40px;
  font-size: 30px;
  // margin: 0 auto;
  margin-left: 30px;
  .second {
    color: ${mainColor};
  }
`;

export const HeaderBasketModal = styled.div``;
export const HeaderBasketIcon = styled.img`
  width: 35px;
  height: 35px;
  padding-top: 1px;
  position: absolute;
  right: 40px;
  margin-right: 40px;
`;

export const HeaderMyPageIcon = styled.img`
  width: 30px;
  height: 30px;
  padding-top: 3px;
  position: absolute;
  right: 0;
  margin-right: 30px;
`;
