/* eslint-disable react/prop-types */
import React from 'react';
import { Map as KakaoMap, MarkerClusterer } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer } from './restaurant.style';
import MapMarkerContainer from './MapMarkerContainer';
import { setSelectedMarker } from '../../redux/map';
import { flattenPages } from '../../libs/utils';

// 상위 컴포넌트에서 데이터를 넘겨받는다.
const Map = ({ restaurants }) => {
  const dispatch = useDispatch();
  const mapState = useSelector((state) => state.map);

  return (
    <MapContainer>
      <div className="emptyDiv" />
      <KakaoMap
        className="kakaoMap"
        center={mapState.mapCenter}
        isPanto
        level={mapState.mapLevel}
        onClick={() => {
          dispatch(setSelectedMarker(null));
        }}
      >
        <MarkerClusterer averageCenter minLevel={5}>
          {restaurants
            ? flattenPages(restaurants.pages).map((restaurant) => {
                const position = {
                  lat: restaurant.latitude,
                  lng: restaurant.longitude,
                };
                return (
                  <MapMarkerContainer
                    key={restaurant.id}
                    index={restaurant.id}
                    position={position}
                    content={restaurant.restaurantName}
                  />
                );
              })
            : null}
        </MarkerClusterer>
      </KakaoMap>
    </MapContainer>
  );
};

export default Map;
