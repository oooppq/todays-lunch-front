/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Dropdown from '../../components/Dropdown';
import { useJoinDropdownHandler } from './join.helpers';

const dropdownStyle = `
  margin: 9px 0 12px 0;
  .selectedLabel {
    height: 45px;
    width: 100%;
    font-size: 17px;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    background-color: #f4f4f4;
    padding: 0 12px;
    color: #7c7c7c;
    font-family: Pretendard-Medium;
    .triangle {
      right: 15px;
      color: #c2c2c2;
    }
  }
`;

const JoinDropdown = ({ idx, elements, selectedList, changeList }) => {
  const { selectedElem, changeSelectedElem, getDropdownElements } =
    useJoinDropdownHandler(idx, elements, selectedList);

  const newElems = getDropdownElements();
  useEffect(() => {
    if (selectedElem && !newElems.some((elem) => elem.id === selectedElem.id)) {
      changeSelectedElem(null);
      changeList(idx, null);
    }
  }, [changeList, changeSelectedElem, idx, newElems, selectedElem]);

  if (!newElems.length) return null;
  return (
    <Dropdown
      data={getDropdownElements()}
      selected={selectedElem}
      setSelected={(toSelect) => {
        changeSelectedElem(toSelect);
        changeList(idx, toSelect);
      }}
      defaultValue="선택해주세요."
      style={dropdownStyle}
    />
  );
};

export default JoinDropdown;
