import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavContainer, NavLi, NavUl } from './nav.style';

const Nav = () => {
  const navigate = useNavigate();

  const navOnClick = (e) => {
    navigate(e.currentTarget.id);
  };
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <NavContainer>
      <NavUl>
        <NavLi
          current={pathName === '/restaurants'}
          id="restaurants"
          onClick={navOnClick}
        >
          둘러보기
        </NavLi>
        <NavLi current={pathName === '/play'} id="play" onClick={navOnClick}>
          오늘의 <span>점심</span>은?
        </NavLi>
        <NavLi
          current={pathName.includes('/restaurants-judge')}
          id="restaurants-judge"
          onClick={navOnClick}
        >
          맛집심사
        </NavLi>
      </NavUl>
    </NavContainer>
  );
};

export default Nav;
