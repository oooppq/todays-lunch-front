/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CurrentLocationBtn, StyledMap } from './judgeNew.style';
import curLocIcon from '../../../assets/img/current-location-icon.png';
import MarkerElement from './MarkerElement';
import { distance } from './judgeNew.helpers';

const JudgeSearchMap = ({ data, selected, setSelected }) => {
  const [map, setMap] = useState();
  const [clickedMarker, setClickedMarker] = useState(null);
  const locationCategory = useSelector(
    (state) => state.judgeNew.locationCategory
  );

  useEffect(() => {
    if (map && data.length) {
      const bounds = new window.kakao.maps.LatLngBounds();
      for (let i = 0; i < data.length; i += 1) {
        bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
      }
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }
  }, [data, map]);

  useEffect(() => {
    if (map && selected) {
      map.setLevel(Math.min(map.getLevel(), 5), {
        animate: true,
        anchor: new window.kakao.maps.LatLng(selected.y, selected.x),
      });
    }
  }, [map, selected]);

  return (
    <StyledMap
      center={{
        lat: locationCategory.latitude,
        lng: locationCategory.longitude,
      }}
      level={5}
      onCreate={setMap}
      onDragStart={() => {
        setSelected(null);
      }}
      onClick={(_e, e) => {
        if (
          distance(
            e.latLng.getLat(),
            e.latLng.getLng(),
            locationCategory.latitude,
            locationCategory.longitude
          ) > 1
        ) {
          map.panTo(
            new window.kakao.maps.LatLng(
              locationCategory.latitude,
              locationCategory.longitude
            )
          );
          return;
        }

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.coord2Address(e.latLng.getLng(), e.latLng.getLat(), (addr) => {
          if (addr.length === 0) return;

          const clicked = {};
          clicked.place_name = '';

          if (addr[0].road_address)
            clicked.address_name = addr[0].road_address.address_name;
          else clicked.address_name = addr[0].address.address_name;
          clicked.x = e.latLng.getLng();
          clicked.y = e.latLng.getLat();
          clicked.id = '-1';
          setSelected(clicked);
          setClickedMarker(clicked);
        });
      }}
    >
      <CurrentLocationBtn
        type="button"
        className="currentLocationBtn"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              if (map) {
                map.setLevel(Math.min(map.getLevel(), 5), { animate: true });
                map.panTo(
                  new window.kakao.maps.LatLng(
                    pos.coords.latitude,
                    pos.coords.longitude
                  )
                );
              }
            }
            // (error) => {
            //   if (error.code === 1) {
            //     console.log('승인부탁');
            //   }
            // }
          );
        }}
      >
        <img src={curLocIcon} alt="" />
      </CurrentLocationBtn>
      {clickedMarker && (
        <MarkerElement
          data={clickedMarker}
          isClicked={selected && clickedMarker.id === selected.id}
          setSelected={setSelected}
        />
      )}
      {data.length
        ? data.map((d) => (
            <MarkerElement
              key={`marker-${d.place_name}-${d.y},${d.x}`}
              data={d}
              isClicked={selected && d.id === selected.id}
              setSelected={setSelected}
            />
          ))
        : null}
    </StyledMap>
  );
};

export default JudgeSearchMap;
