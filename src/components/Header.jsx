import React from 'react';
import { HeaderContainer, HeaderLogo } from './header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        {/* 추후에 글자마다 색을 다르게 하기 위해 span으로 나눠 놓음 */}
        <span>점</span>
        <span>메</span>
        <span>추</span>
      </HeaderLogo>
    </HeaderContainer>
  );
};

export default Header;
