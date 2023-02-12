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
          className="bold"
        >
          둘러보기
        </NavLi>
        <NavLi
          current={pathName === '/play'}
          id="play"
          onClick={navOnClick}
          className="bold"
        >
          오늘의 <span>점심</span>은?
        </NavLi>
        <NavLi
          current={pathName === '/restaurants-judge'}
          id="restaurants-judge"
          onClick={navOnClick}
          className="bold"
        >
          맛집심사
        </NavLi>
      </NavUl>
    </NavContainer>
  );
};

export default Nav;
