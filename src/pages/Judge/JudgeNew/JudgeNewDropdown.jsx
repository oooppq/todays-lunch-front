/* eslint-disable react/prop-types */
import React from 'react';
import { useQueries } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  setLocationCategory,
  setLocationTag,
  setFoodCategory,
} from '../../../redux/judgeNew';

import Dropdown from '../../../components/Dropdown';

const JudgeNewDropdown = () => {
  const foodCategory = useSelector((state) => state.judgeNew.foodCategory);
  const locationTag = useSelector((state) => state.judgeNew.locationTag);
  const locationCategory = useSelector(
    (state) => state.judgeNew.locationCategory
  );
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

  // server data state 관리를 위한 state
  const ress = useQueries([
    {
      queryKey: ['location-category'],
      queryFn: () =>
        axios.get('/api/location-category').then((res) => res.data),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ['location-tags'],
      queryFn: () => axios.get('/api/location-tags').then((res) => res.data),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ['food-category'],
      queryFn: () => axios.get('/api/food-category').then((res) => res.data),
      refetchOnWindowFocus: false,
    },
    // {
    //   queryKey: ['recommend-category'],
    //   queryFn: () =>
    //     axios.get('/api/recommend-category').then((res) => res.data),
    //   refetchOnWindowFocus: false,
    // },
  ]);

  if (ress.some((res) => res.status === 'loading')) return null;

  return (
    <div className="dropdowns">
      <Dropdown
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
      />
      <Dropdown
        data={ress[2].data}
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
