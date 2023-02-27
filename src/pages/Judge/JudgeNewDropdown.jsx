/* eslint-disable react/prop-types */
import React from 'react';
import { useQueries } from 'react-query';
import axios from 'axios';
import Dropdown from '../../components/Dropdown';

const JudgeNewDropdown = ({
  selectedLocCat,
  setSelectedLocCat,
  selectedLocTag,
  setSelectedLocTag,
  selectedFoodCat,
  setSelectedFoodCat,
}) => {
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
        selected={selectedLocCat}
        setSelected={(toSelect) => {
          setSelectedLocCat(toSelect);
          setSelectedLocTag(null);
        }}
        defaultValue="위치"
        style={dropdownStyle}
      />
      <Dropdown
        data={ress[1].data.data.filter(
          (tag) => selectedLocCat && tag.loc_category_id === selectedLocCat.id
        )}
        selected={selectedLocTag}
        setSelected={setSelectedLocTag}
        defaultValue="상세 위치"
        style={dropdownStyle}
      />
      <Dropdown
        data={ress[2].data.data}
        selected={selectedFoodCat}
        setSelected={setSelectedFoodCat}
        defaultValue="음식 종류"
        style={dropdownStyle}
      />
    </div>
  );
};

export default JudgeNewDropdown;
