import styled from 'styled-components';

export const DropdownContainer = styled.div`
  width: 85px;
  height: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 30px;

  padding: 0 7px;
  position: relative;
`;
export const SelectedLabel = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
  border: none;
  color: #7c7c7c;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  font-size: 12px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .label {
    display: inline-block;
    box-sizing: content-box;
    white-space: nowrap;
    width: 50px;
    overflow: hidden;
  }
  .triangle {
    color: #cbcbcb;
  }
`;

export const OptionContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  font-size: 13px;
  z-index: 99;
`;

export const OptionUl = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: 364px;
  list-style: none;
  margin: 0;
  padding: 32px 0 0 0;
  background-color: white;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  overflow: auto;
`;

export const OptionLi = styled.li`
  font-family: Pretendard-Medium;
  font-size: 19px;
  margin: 0 34px;
  padding: 20px 12px;
  border-bottom: 1px solid #eaeaea;
`;
