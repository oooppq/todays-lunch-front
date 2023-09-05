/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Map as KakaoMap } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer } from './restaurant.style';
import MapMarkerContainer from './MapMarkerContainer';
import { setSelectedMarker } from '../../redux/map';
import { flattenPages } from '../../libs/utils';

// 상위 컴포넌트에서 데이터를 넘겨받는다.
const Map = ({ restaurants, handlePageNum }) => {
  const dispatch = useDispatch();
  const mapState = useSelector((state) => state.map);
  const [map, setMap] = useState();
  const restaurantList = flattenPages(restaurants.pages);
  const [initialFlag, setInitialFlag] = useState(true);

  useEffect(() => {
    if (map && restaurantList.length && initialFlag) {
      const bounds = new window.kakao.maps.LatLngBounds();
      for (let i = 0; i < restaurantList.length; i += 1) {
        bounds.extend(
          new window.kakao.maps.LatLng(
            restaurantList[i].latitude,
            restaurantList[i].longitude
          )
        );
      }

      map.setBounds(bounds);
      setInitialFlag(false);
    }
  }, [restaurantList, map, initialFlag]);

  return (
    <MapContainer>
      <div className="emptyDiv" />
      <button onClick={handlePageNum} type="button" className="moreButton">
        더 많은 맛집 보기
      </button>
      <KakaoMap
        className="kakaoMap"
        center={mapState.mapCenter}
        onCreate={setMap}
        isPanto
        level={mapState.mapLevel}
        onClick={() => {
          dispatch(setSelectedMarker(null));
        }}
      >
        {restaurantList.map((restaurant) => {
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
        })}
      </KakaoMap>
    </MapContainer>
  );
};

export default Map;
