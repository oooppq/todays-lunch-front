/* eslint-disable react/prop-types */
import React from 'react';
import DetailInfo from './DetailInfo';
import DetailMap from './DetailMap';
import DetailContributor from './DetailContributor';

const DetailMain = ({
  restaurant,
  menuData,
  openMenuPhotoModal,
  openMenuUpdateModal,
  openMenuSaleInfoModal,
}) => {
  const mapData = {
    restaurantName: restaurant.restaurantName,
    address: restaurant.address,
    lat: restaurant.latitude,
    lng: restaurant.longitude,
  };
  const { contributors } = restaurant;

  return (
    <>
      <DetailInfo
        restaurantData={restaurant}
        menuData={menuData}
        openMenuPhotoModal={openMenuPhotoModal}
        openMenuUpdateModal={openMenuUpdateModal}
        openMenuSaleInfoModal={openMenuSaleInfoModal}
      />
      <DetailMap mapData={mapData} />
      <DetailContributor contributors={contributors} />
    </>
  );
};

export default DetailMain;
