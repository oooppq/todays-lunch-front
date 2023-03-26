/* eslint-disable react/prop-types */
import React from 'react';
import DetailInfo from './DetailInfo';
import DetailMap from './DetailMap';
import DetailContributor from './DetailContributor';

const DetailMain = ({ restaurantData, menuData }) => {
  const mapData = {
    restaurantName: restaurantData.restaurantName,
    address: restaurantData.adress,
    lat: restaurantData.latitude,
    lng: restaurantData.longitude,
  };
  const { contributors } = restaurantData;

  return (
    <>
      <DetailInfo restaurantData={restaurantData} menuData={menuData} />
      <DetailMap mapData={mapData} />
      <DetailContributor contributors={contributors} />
    </>
  );
};

export default DetailMain;
