/* eslint-disable react/prop-types */
import React from 'react';
import DetailInfo from './DetailInfo';
import DetailMap from './DetailMap';
import DetailContributor from './DetailContributor';

const DetailMain = ({
  restaurant,
  menuData,
  openNewMenuModal,
  useMenuElem,
}) => {
  const mapData = {
    restaurantName: restaurant.restaurantName,
    address: restaurant.address,
    lat: restaurant.latitude,
    lng: restaurant.longitude,
  };
  const { contributors } = restaurant;

  return (
    <div className="detailMain">
      <DetailInfo
        restaurantData={restaurant}
        menuData={menuData}
        openNewMenuModal={openNewMenuModal}
        useMenuElem={useMenuElem}
      />
      <DetailMap mapData={mapData} />
      <DetailContributor contributors={contributors} />
    </div>
  );
};

export default DetailMain;
