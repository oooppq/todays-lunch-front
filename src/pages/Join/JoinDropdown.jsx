/* eslint-disable react/prop-types */
import React from 'react';
import Dropdown from '../../components/Dropdown';

const dropdownStyle = `
  margin: 12px 0 4px 0;
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

const JoinDropdown = ({ data, selected, addCategory, setCategory }) => {
  const newData = data.filter(
    (elem) => !selected.map((s) => s.id).includes(elem.id)
  );

  return newData.length > 0 ? (
    <Dropdown
      data={data.filter((elem) => !selected.map((s) => s.id).includes(elem.id))}
      setSelected={(toSelect) => {
        addCategory(toSelect, setCategory);
      }}
      defaultValue="선택해주세요."
      style={dropdownStyle}
    />
  ) : null;
};

export default JoinDropdown;
