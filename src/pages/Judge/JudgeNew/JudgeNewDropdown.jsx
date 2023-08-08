/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // setLocationCategory,
  // setLocationTag,
  setFoodCategory,
} from '../../../redux/judgeNew';

import Dropdown from '../../../components/Dropdown';

const JudgeNewDropdown = ({ foodCategoryRes }) => {
  const foodCategory = useSelector((state) => state.judgeNew.foodCategory);
  const dropdownStyle = `
    .selectedLabel {
      background-color: white;
      height: 32px;
      width: 98px;
      font-size: 12px;
      border-radius: 30px;
      border: 1px solid #bdbdbd;
      padding: 0 16px;
      color: #7c7c7c;
      .triangle {
        right: 11px;
        color: #cbcbcb;
      }
    }
  `;

  const dispatch = useDispatch();

  return (
    <div className="dropdowns">
      {/* <Dropdown
        data={ress[0].data}
        selected={locationCategory}
        setSelected={(toSelect) => {
          dispatch(setLocationCategory(toSelect));
          dispatch(setLocationTag(null));
        }}
        defaultValue="위치"
        style={dropdownStyle}
      />
      <Dropdown
        data={ress[1].data.filter(
          (tag) =>
            locationCategory && tag.loc_category_id === locationCategory.id
        )}
        selected={locationTag}
        setSelected={(toSelect) => {
          dispatch(setLocationTag(toSelect));
        }}
        defaultValue="상세 위치"
        style={dropdownStyle}
      /> */}
      {foodCategoryRes && (
        <Dropdown
          data={foodCategoryRes.data}
          selected={foodCategory}
          setSelected={(toSelect) => {
            dispatch(setFoodCategory(toSelect));
          }}
          defaultValue="음식 종류"
          style={dropdownStyle}
        />
      )}
    </div>
  );
};

export default JudgeNewDropdown;
