import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMyPageIcon,
  HeaderBasketModal,
  HeaderBasketIcon,
} from './header.style';
import defaultUser from '../assets/img/default-icon.svg';
import basket from '../assets/img/header-heart-icon.svg';
import { authStates } from '../libs/utils';

const Header = () => {
  const navigate = useNavigate();
  // const [isModal, setModal] = useState();
  const userState = useSelector((state) => state.userAuth.state);
  return (
    <HeaderContainer>
      <HeaderLogo
        className="headerLogo"
        onClick={() => {
          navigate('/');
        }}
        id="home"
      >
        {/* 추후에 글자마다 색을 다르게 하기 위해 span으로 나눠 놓음 */}
        <span className="first">점</span>
        <span className="second">메</span>
        <span className="third">추</span>
      </HeaderLogo>
      <HeaderBasketModal />
      <HeaderBasketIcon
        src={basket}
        onClick={() => {
          navigate('/wishlist');
        }}
      />
      <HeaderMyPageIcon
        src={defaultUser}
        onClick={() => {
          if (userState === authStates.AUTHORIZED) navigate('/mypage');
          else navigate('/login');
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
