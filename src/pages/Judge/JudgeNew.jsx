import React, { useState } from 'react';
import JudgeSearch from './JudgeSearch';
import JudgeNewGetPhoto from './JudgeNewGetPhoto';
import {
  JudgeNewContainer,
  JudgeNewHeader,
  JudgeNewBody,
  DoneBtn,
} from './judge.style';
import xIcon from '../../assets/img/x-icon.svg';
import markerIcon from '../../assets/img/marker-icon.svg';
import JudgeNewOutModal from './JudgeNewOutModal';
import JudgeSuccess from './JudgeSuccess';
import JudgeNewDropdown from './JudgeNewDropdown';

const JudgeNew = () => {
  /* 데이터의 상태를 다루는 state, 이 페이지에서만 필요하고 페이지 이동시에
     state가 유지될 필요가 없기 때문에 local state로 구현 */
  const [restaurantName, setRestaurantName] = useState(null);
  const [comment, setComment] = useState('');
  const [selectedLocCat, setSelectedLocCat] = useState(null);
  const [selectedLocTag, setSelectedLocTag] = useState(null);
  const [selectedFoodCat, setSelectedFoodCat] = useState(null);
  const [file, setFile] = useState([]);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [data, setData] = useState(null);

  // 각종 modal을 위한 state
  const [isOut, setIsOut] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isDone, setIsDone] = useState(false);

  return (
    <JudgeNewContainer>
      <JudgeNewHeader>
        <div className="pageTitle">맛집 등록하기</div>
        <button
          type="button"
          onClick={() => {
            setIsOut(true);
          }}
        >
          <img src={xIcon} alt="" />
        </button>
      </JudgeNewHeader>
      {isOut ? <JudgeNewOutModal setIsOut={setIsOut} /> : null}
      {isSearch ? (
        <JudgeSearch
          setIsSearch={setIsSearch}
          setRestaurantName={setRestaurantName}
          setLocation={setLocation}
          setAddress={setAddress}
        />
      ) : null}
      <JudgeNewBody>
        <div className="search">
          <div className="bodyTitle">맛집 찾기</div>
          <button
            type="button"
            className="bodyBtn saerchBtn"
            onClick={() => {
              setIsSearch(true);
            }}
          >
            <img src={markerIcon} alt="" />
            <div>{restaurantName || '맛집 설정하기'}</div>
          </button>
        </div>
        <div className="category">
          <div className="bodyTitle">카테고리 설정</div>
          <JudgeNewDropdown
            selectedLocCat={selectedLocCat}
            setSelectedLocCat={setSelectedLocCat}
            selectedLocTag={selectedLocTag}
            setSelectedLocTag={setSelectedLocTag}
            selectedFoodCat={selectedFoodCat}
            setSelectedFoodCat={setSelectedFoodCat}
          />
        </div>
        <JudgeNewGetPhoto file={file} setFile={setFile} />

        <div className="review">
          <div className="bodyTitle">리뷰</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
      </JudgeNewBody>
      <DoneBtn
        onClick={() => {
          if (
            restaurantName &&
            file &&
            selectedLocCat &&
            selectedLocTag &&
            selectedFoodCat &&
            location &&
            address.length &&
            comment.length
          ) {
            setData({
              restaurantName,
              restaurantImage: file,
              foodCategoryName: selectedFoodCat.name,
              locationCategoryName: selectedLocCat.name,
              locationTagName: selectedLocTag.name,
              latitude: location.latitude,
              longitude: location.longitude,
              address,
              instroduction: comment,
            });
            setIsDone(true);
          }
        }}
      >
        새로운 맛집 등록
      </DoneBtn>
      {isDone ? <JudgeSuccess setIsDone={setIsDone} data={data} /> : null}
    </JudgeNewContainer>
  );
};

export default JudgeNew;
