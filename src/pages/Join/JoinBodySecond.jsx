/* eslint-disable react/prop-types */
import React from 'react';
import { useQueries } from 'react-query';
import axios from 'axios';
import { JoinBodySecondContainer } from './join.style';
import plusIcon from '../../assets/img/plus-icon.svg';
import JoinDropdown from './JoinDropdown';

const JoinBodySecond = ({
  locations,
  foods,
  addLocation,
  changeLocations,
  addFood,
  changeFoods,
  goToNextStage,
}) => {
  const ress = useQueries([
    {
      queryKey: 'location-category',
      queryFn: () =>
        axios.get('/api/location-category').then((res) => res.data),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: 'food-category',
      queryFn: () => axios.get('/api/food-category').then((res) => res.data),
      refetchOnWindowFocus: false,
    },
  ]);
  if (ress.some((res) => res.isLoading || res.isError)) return null;

  return (
    <JoinBodySecondContainer>
      <div className="label">활동 영역</div>
      <div className="locDropdownsOuter">
        {locations.map((location) => (
          <JoinDropdown
            key={location.id}
            idx={location.id}
            elements={ress[0].data}
            selectedList={locations.map((loc) => loc.data)}
            changeList={changeLocations}
          />
        ))}
      </div>
      <button type="button" className="newLocCatBtn" onClick={addLocation}>
        <img src={plusIcon} alt="" className="" />
      </button>
      <div className="lavel">좋아하는 음식 종류</div>
      <div className="foodDropdownsOuter">
        {foods.map((food) => (
          <JoinDropdown
            key={food.id}
            idx={food.id}
            elements={ress[1].data}
            selectedList={foods.map((fo) => fo.data)}
            changeList={changeFoods}
          />
        ))}
      </div>

      <button type="button" className="newFoodCatBtn" onClick={addFood}>
        <img src={plusIcon} alt="" className="" />
      </button>
      <button
        type="button"
        className="btn registerBtn"
        onClick={() => {
          console.log(locations);
          console.log(foods);
          goToNextStage();
        }}
      >
        회원가입
      </button>
    </JoinBodySecondContainer>
  );
};

export default JoinBodySecond;
