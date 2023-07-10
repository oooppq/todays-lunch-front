import styled from 'styled-components';
import { mainColor } from '../pages/common.style';
// import logo from '../../../public/logo.png';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  margin-bottom: 22px;
  position: relative;
`;
// export const HeaderLogo = styled.img`
//   content: url(${logo});
//   width: 100px;
// `;

export const HeaderLogo = styled.div`
  font-family: 'Jejudoldam';
  width: 96px;
  height: 49px;
  margin: 19px 0 0 30px;
  font-size: 32px;
  // line-height: 37.5px;

  .second {
    // color: ${mainColor};
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
