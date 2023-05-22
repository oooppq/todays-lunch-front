/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { JoinBodySecondContainer } from './join.style';
// import plusIcon from '../../assets/img/plus-icon.svg';
import JoinDropdown from './JoinDropdown';
import {
  useGetCategories,
  useInputValidation,
  useWarningHandler,
} from './join.helpers';
import JoinWarningMessage from './JoinWarningMessage';
import xIcon from '../../assets/img/x-icon.svg';

const JoinBodySecond = ({
  locations,
  foods,
  setLocations,
  setFoods,
  addCategory,
  deleteCategory,
  goToNextStage,
  postJoinRequest,
}) => {
  const { locationCategories, foodCategories, isLoading, isError } =
    useGetCategories();
  const { locationWarning, foodWarning, setLocationWarning, setFoodWarning } =
    useWarningHandler();
  const { checkDropdown, checkAllForSecond } = useInputValidation();

  useEffect(() => {
    if (locations.length) setLocationWarning(!checkDropdown(locations));
    if (foods.length) setFoodWarning(!checkDropdown(foods));
  }, [locations, foods, setLocationWarning, checkDropdown, setFoodWarning]);

  if (isLoading || isError) return null;

  return (
    <JoinBodySecondContainer>
      <div className="label">활동 영역</div>
      <ul className="categoryUl">
        {locations.map((loc) => (
          <li key={loc.id} className="categoryLi">
            <div className="categoryName">{loc.name}</div>
            <button
              type="button"
              className="deleteCategoryBtn"
              onClick={() => {
                deleteCategory(loc, setLocations);
              }}
            >
              <img src={xIcon} alt="" className="" />
            </button>
          </li>
        ))}
      </ul>
      <JoinDropdown
        data={locationCategories}
        selected={locations}
        addCategory={addCategory}
        setCategory={setLocations}
      />
      <JoinWarningMessage
        flag={locationWarning}
        message="활동영역을 선택해주세요."
      />

      <div className="label">좋아하는 음식 종류</div>
      <ul className="categoryUl">
        {foods.map((food) => (
          <li key={food.id} className="categoryLi">
            <div className="categoryName">{food.name}</div>
            <button
              type="button"
              className="deleteCategoryBtn"
              onClick={() => {
                deleteCategory(food, setFoods);
              }}
            >
              <img src={xIcon} alt="" className="" />
            </button>
          </li>
        ))}
      </ul>
      <JoinDropdown
        data={foodCategories}
        selected={foods}
        addCategory={addCategory}
        setCategory={setFoods}
      />
      <JoinWarningMessage
        flag={foodWarning}
        message="선호하는 음식종류를 선택해주세요."
      />

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
