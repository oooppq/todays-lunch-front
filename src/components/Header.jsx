import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMyPageIcon,
  HeaderWishIcon,
} from './header.style';
import user from '../assets/img/user.png';
import wish from '../assets/img/basket.png';

const Header = () => {
  const navigate = useNavigate();

  const navOnClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <HeaderLogo onClick={navOnClick} id="home">
        {/* 추후에 글자마다 색을 다르게 하기 위해 span으로 나눠 놓음 */}
        <span className="first">점</span>
        <span className="second">메</span>
        <span className="third">추</span>
      </HeaderLogo>
      <HeaderWishIcon src={wish} />
      <HeaderMyPageIcon src={user} />
    </HeaderContainer>
  );
};

export default Header;
