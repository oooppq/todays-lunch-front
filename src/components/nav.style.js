import styled from 'styled-components';
import { mainColor } from '../pages/common.style';

export const NavContainer = styled.div`
  width: 100%;
  // height: 30px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 10px;
  box-shadow: 0px 5px 4px -3px rgba(0, 0, 0, 0.1);
`;

export const NavUl = styled.ul`
  font-size: 18px;
  color: #5c5c5c;
  padding: 0 39px;
  // width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  text-algin: center;
  list-style: none;
  margin: 0;
  // padding: 0;
`;

export const NavLi = styled.li`
  height: 21px;
  color: ${(props) => (props.current ? 'black' : '#5c5c5c')};
  font-family: ${(props) =>
    props.current ? 'Pretendard-SemiBold' : 'Pretendard-Regular'};
  padding-bottom: 15px;
  span {
    // color: ${mainColor};
  }
  border-bottom: 3px solid
    ${(props) => (props.current ? 'black' : 'transparent')};
`;
