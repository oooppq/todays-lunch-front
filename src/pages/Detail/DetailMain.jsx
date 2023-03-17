/* eslint-disable react/prop-types */
import React from 'react';
import DetailInfo from './DetailInfo';
import DetailMap from './DetailMap';
import DetailContributor from './DetailContributor';

const DetailMain = ({ restaurantData, menuData }) => {
  const coordination = {
    lat: restaurantData.latitude,
    lng: restaurantData.longitude,
  };
  const { contributors } = restaurantData;

  return (
    <>
      <DetailInfo restaurantData={restaurantData} menuData={menuData} />
      <DetailMap coordination={coordination} />
      <DetailContributor contributors={contributors} />
    </>
  );
};

export default DetailMain;
