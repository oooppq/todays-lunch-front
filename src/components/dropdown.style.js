import styled from 'styled-components';

export const DropdownContainer = styled.div`
  width: 60px;
`;
export const SelectedLabel = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
  border: none;
  color: black;
  width: 100%;
  height: 20px;
  text-align: left;
  font-size: 13px;
  padding: 0;
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
