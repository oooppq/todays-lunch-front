/* eslint-disable react/prop-types */
import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { DetailMapContainer } from './detail.style';

const DetailMap = ({ mapData }) => {
  return (
    <DetailMapContainer>
      <div className="title">📌 가게 위치 정보</div>
      <div className="subTitle">
        <span className="restaurantName">{mapData.restaurantName}</span>의 주소
      </div>
      <div className="address">{mapData.address}</div>
      <Map
        className="map"
        center={{ lat: mapData.lat, lng: mapData.lng }}
        isPanto
        level={3}
      >
        <MapMarker position={{ lat: mapData.lat, lng: mapData.lng }} />
      </Map>
      <button type="button" className="findWay">
        <a
          href={`https://map.kakao.com/link/to/${mapData.restaurantName},${mapData.lng},${mapData.lat}`}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </button>
    </DetailMapContainer>
  );
};

export default DetailMap;
