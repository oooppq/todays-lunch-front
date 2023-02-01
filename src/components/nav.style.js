import styled from 'styled-components';
import { mainColor } from '../pages/common.style';

export const NavContainer = styled.div`
  width: 100%;
  height: 30px;
  padding-top: 10px;
  border-bottom: 1px solid #e5e7eb;
`;

export const NavUl = styled.ul`
  font-size: 15px;
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
