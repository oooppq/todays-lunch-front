/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { JoinBodySecondContainer } from './join.style';
import plusIcon from '../../assets/img/plus-icon.svg';
import JoinDropdown from './JoinDropdown';
import {
  useGetCategories,
  useInputValidation,
  useWarningHandler,
} from './join.helpers';
import JoinWarningMessage from './JoinWarningMessage';

const JoinBodySecond = ({
  locations,
  foods,
  addLocation,
  changeLocations,
  addFood,
  changeFoods,
  goToNextStage,
  postJoinRequest,
}) => {
  const { locationCategories, foodCategories, isLoading, isError } =
    useGetCategories();
  const { locationWarning, foodWarning, setLocationWarning, setFoodWarning } =
    useWarningHandler();
  const { checkDropdown, checkAllForSecond } = useInputValidation();

  useEffect(() => {
    if (locations[0].data) setLocationWarning(!checkDropdown(locations));
    if (foods[0].data) setFoodWarning(!checkDropdown(foods));
  }, [locations, foods, setLocationWarning, checkDropdown, setFoodWarning]);

  if (isLoading || isError) return null;

  return (
    <JoinBodySecondContainer>
      <div className="label">활동 영역</div>
      <div className="locDropdownsOuter">
        {locations.map((location) => (
          <JoinDropdown
            key={location.id}
            idx={location.id}
            elements={locationCategories}
            selectedList={locations.map((loc) => loc.data)}
            changeList={changeLocations}
          />
        ))}
      </div>
      <JoinWarningMessage
        flag={locationWarning}
        message="활동영역을 선택해주세요."
      />
      <button type="button" className="newLocCatBtn" onClick={addLocation}>
        <img src={plusIcon} alt="" className="" />
      </button>
      <div className="lavel">좋아하는 음식 종류</div>
      <div className="foodDropdownsOuter">
        {foods.map((food) => (
          <JoinDropdown
            key={food.id}
            idx={food.id}
            elements={foodCategories}
            selectedList={foods.map((fo) => fo.data)}
            changeList={changeFoods}
          />
        ))}
      </div>
      <JoinWarningMessage
        flag={foodWarning}
        message="선호하는 음식종류를 선택해주세요."
      />
      <button type="button" className="newFoodCatBtn" onClick={addFood}>
        <img src={plusIcon} alt="" className="" />
      </button>
      <button
        type="button"
        className="btn registerBtn"
        onClick={() => {
          if (checkAllForSecond(locations, foods)) {
            postJoinRequest();
            goToNextStage();
          } else {
            setLocationWarning(!checkDropdown(locations));
            setFoodWarning(!checkDropdown(foods));
          }
        }}
      >
        회원가입
      </button>
    </JoinBodySecondContainer>
  );
};

export default JoinBodySecond;
