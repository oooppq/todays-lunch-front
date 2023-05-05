/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import { CustomOverlayElem } from './restaurant.style';
import { gotoDetailOnClick } from '../../libs/utils';
import { setMapCenter, setSelectedMarker } from '../../redux/map';
import marker from '../../assets/img/marker.png';

const MapMarkerContainer = ({ index, position, content }) => {
  const markerRef = useRef(); // 마커 이외의 부분 클릭할 때 상호명 사라지도록 useRef을 통해 마커 컴포넌트 변수화
  const selectedMarker = useSelector((state) => state.map.selectedMarker);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <MapMarker
        ref={markerRef}
        position={position}
        onClick={() => {
          dispatch(setSelectedMarker(index));
          dispatch(setMapCenter(position));
        }}
        image={{
          src: marker,
          size: { width: 25, height: 35 },
        }}
      />
      {selectedMarker === index ? (
        <CustomOverlayMap
          position={position}
          style={{ position: 'relative' }}
          clickable="true" // 이 속성 설정 안해주면 click event를 받지 않음.
        >
          <CustomOverlayElem
            onClick={(e) => {
              e.stopPropagation();
              gotoDetailOnClick(index, navigate);
            }}
          >
            {content}
            {' ▶'}
          </CustomOverlayElem>
        </CustomOverlayMap>
      ) : null}
    </>
  );
};

export default MapMarkerContainer;
