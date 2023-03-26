/* eslint-disable react/prop-types */
import React from 'react';
import fullStarIcon from '../../assets/img/full-star-icon.svg';
import emptyStarIcon from '../../assets/img/empty-star-icon.svg';

const StarElem = ({ index, rating, changeRating }) => {
  return (
    <img
      className="reviewStar"
      src={index <= rating ? fullStarIcon : emptyStarIcon}
      alt=""
      onClick={() => changeRating(index)}
      aria-hidden="true"
    />
  );
};

const DetailNewReviewRate = ({ rating, changeRating }) => {
  return (
    <div className="newReviewRateStars">
      <StarElem index={1} rating={rating} changeRating={changeRating} />
      <StarElem index={2} rating={rating} changeRating={changeRating} />
      <StarElem index={3} rating={rating} changeRating={changeRating} />
      <StarElem index={4} rating={rating} changeRating={changeRating} />
      <StarElem index={5} rating={rating} changeRating={changeRating} />
    </div>
  );
};

export default DetailNewReviewRate;
