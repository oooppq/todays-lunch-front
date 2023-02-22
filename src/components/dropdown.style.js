import styled from 'styled-components';

export const DropdownContainer = styled.div`
  width: 60px;
  height: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  text-align: center;
  padding: 0 7px;
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
  font-size: 11px;
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
`;
export const OptionUl = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
  margin-top: 3px 0 0 0;
  font-size: 13px;
  z-index: 99;
  background-color: white;
`;
export const OptionLi = styled.li`
  margin: 2px 0;
`;
