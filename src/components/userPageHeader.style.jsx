/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const UserPageHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: white;
  height: 66px;
  max-width: 390px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px 0 16px;
  box-sizing: border-box;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  .backBtn {
    width: 25px;
    height: 25px;
  }
  .homeBtn {
    width: 25px;
    height: 25px;
  }
`;
