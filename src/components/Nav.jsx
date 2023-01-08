import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavContainer, NavLi, NavUl } from './nav.style';

const Nav = () => {
  const navigate = useNavigate();

  const navOnClick = (e) => {
    navigate(e.target.id);
  };

  return (
    <NavContainer>
      <NavUl>
        <NavLi id="map" onClick={navOnClick} className="bold">
          둘러보기
        </NavLi>
        <NavLi id="play" onClick={navOnClick} className="bold">
          오늘의 <span>점심</span>은?
        </NavLi>
        <NavLi id="judge" onClick={navOnClick} className="bold">
          맛집심사
        </NavLi>
      </NavUl>
    </NavContainer>
  );
};

export default Nav;
