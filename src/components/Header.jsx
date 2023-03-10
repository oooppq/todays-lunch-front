import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMyPageIcon,
  HeaderBasketModal,
  HeaderBasketIcon,
} from './header.style';
import defaultUser from '../assets/img/default-icon.svg';
import basket from '../assets/img/basket-icon.svg';

const Header = () => {
  const navigate = useNavigate();
  // const [isModal, setModal] = useState();

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
      <HeaderBasketIcon src={basket} />
      <HeaderMyPageIcon
        src={defaultUser}
        onClick={() => {
          navigate('/login');
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
