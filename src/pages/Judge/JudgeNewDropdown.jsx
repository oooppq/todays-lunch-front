/* eslint-disable react/prop-types */
import React from 'react';
import { useQueries } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  setLocationCategory,
  setLocationTag,
  setFoodCategory,
} from '../../redux/judgeNew';

import Dropdown from '../../components/Dropdown';

const JudgeNewDropdown = () => {
  const foodCategory = useSelector((state) => state.judgeNew.foodCategory);
  const locationTag = useSelector((state) => state.judgeNew.locationTag);
  const locationCategory = useSelector(
    (state) => state.judgeNew.locationCategory
  );

  const dispatch = useDispatch();

  // server data state 관리를 위한 state
  const ress = useQueries([
    {
      queryKey: ['location-category'],
      queryFn: () => axios.get('/api/location-category'),
    },
    {
      queryKey: ['location-tags'],
      queryFn: () => axios.get('/api/location-tags'),
    },
    {
      queryKey: ['food-category'],
      queryFn: () => axios.get('/api/food-category'),
    },
  ]);

  const dropdownStyle = {
    height: '100%',
    width: '98px',
    fontSize: '13px',
  };

  if (ress.some((res) => res.status === 'loading')) return null;

  return (
    <div className="dropdowns">
      <Dropdown
        data={ress[0].data.data}
        selected={locationCategory}
        setSelected={(toSelect) => {
          dispatch(setLocationCategory(toSelect));
          dispatch(setLocationTag(null));
        }}
        defaultValue="위치"
        style={dropdownStyle}
      />
      <Dropdown
        data={ress[1].data.data.filter(
          (tag) =>
            locationCategory && tag.loc_category_id === locationCategory.id
        )}
        selected={locationTag}
        setSelected={(toSelect) => {
          dispatch(setLocationTag(toSelect));
        }}
        defaultValue="상세 위치"
        style={dropdownStyle}
      />
      <Dropdown
        data={ress[2].data.data}
        selected={foodCategory}
        setSelected={(toSelect) => {
          dispatch(setFoodCategory(toSelect));
        }}
        defaultValue="음식 종류"
        style={dropdownStyle}
      />
    </div>
  );
};

export default JudgeNewDropdown;
