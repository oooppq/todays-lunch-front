import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { DetailMapContainer } from './detail.style';

const data = {
  id: 1,
  restaurantName: '가츠벤또',
  foodCategory: '일식',
  locationCategory: '서강대',
  locationTag: '정문',
  recommendCategoryList: [
    '조용히 혼밥하기 좋으니 가게🍚',
    '집밥이 그리울 때 가게🥘',
  ],
  imageUrl:
    'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/judge_restaurant/2023/02/25/aac947f8-44bc-4593-a73c-1b7d93dd896d_IMG_3207.PNG',
  longitude: 126.9410023,
  latitude: 37.5509442,
  address: '서울특별시 마포구 백범로 35 곤자가 국제학사 곤자가국제학사',
  rating: 0.0,
  reviewCount: 0,
  nickname: 'jongmi',
};

const DetailMap = () => {
  return (
    <DetailMapContainer>
      <div className="title">📌 가게 위치 정보</div>
      <div className="subTitle">{data.restaurantName}의 위치</div>
      <div className="address">{data.address}</div>
      <Map
        className="map"
        center={{ lat: data.latitude, lng: data.longitude }}
        isPanto
        level={3}
      >
        <MapMarker position={{ lat: data.latitude, lng: data.longitude }} />
      </Map>
      <button type="button" className="findWay">
        길찾기
      </button>
    </DetailMapContainer>
  );
};

export default DetailMap;
