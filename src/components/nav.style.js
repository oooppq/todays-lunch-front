import styled from 'styled-components';
import { mainColor } from '../pages/common.style';

export const NavContainer = styled.div`
  width: 100%;
  height: 30px;
  padding-top: 10px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 10px;
  box-shadow: 0px 4px 5px -5px #9a9a9a;
`;

export const NavUl = styled.ul`
  font-size: 15px;
  color: #5c5c5c;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  text-algin: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLi = styled.li`
  span {
    color: ${mainColor};
  }
  border-bottom: 2px solid
    ${(props) => (props.current ? mainColor : 'transparent')};
`;
