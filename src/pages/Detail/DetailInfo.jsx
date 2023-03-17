import React from 'react';
import { DetailInfoContainer } from './detail.style';
import smileIcon from '../../assets/img/smile-icon.svg';

const DetailInfo = () => {
  return (
    <DetailInfoContainer>
      <div className="update">가게 정보 업데이트 날짜: 2023-02-23</div>
      <div className="title">
        <img src="" alt="" />
        📌 가게 정보
      </div>
      <div className="hashTags">
        <div className="hashTag">#한식</div>
        <div className="hashTag">#서강대</div>
        <div className="hashTag">#정문</div>
      </div>
      <div className="recomCat"># 대학생 밥약하기 좋은 가게</div>
      <div className="help">
        <img className="helpImg" src={smileIcon} alt="" />
        <div className="helpText">
          각 메뉴를 클릭하면 사진을 확인 하거나, 사진을 올릴 수 있어요. <br />
          메뉴 옆 숫자는 저장된 사진 개수 입니다.
        </div>
      </div>
      <div className="menu">
        <div className="menuTop">
          <div className="menuTitle">메뉴</div>
          <div className="menuUpdate">메뉴판 수정하기</div>
        </div>
        <ul className="menuUl">
          <li className="menuLi">
            <div className="menuLiInner">
              <div className="menuName">스테이크</div>
              <div className="menuPhotoNum">(4)</div>
              <div className="menuPrice">18,000원</div>
            </div>
          </li>
          <li className="menuLi">
            <div className="menuLiInner">
              <div className="menuName">스테이크</div>
              <div className="menuPhotoNum">(4)</div>
              <div className="menuPrice">18,000원</div>
            </div>
          </li>
          <li className="menuLi">
            <div className="menuLiInner">
              <div className="menuName">스테이크</div>
              <div className="menuPhotoNum">(4)</div>
              <div className="menuPrice">18,000원</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="sale">
        <div className="saleTop">
          <div className="saleTitle">세일 정보</div>
          <div className="saleUpdate">세일정보 수정하기</div>
        </div>
        <ul className="saleUl">
          <li className="saleLi">{'<개강 세일>'}</li>
        </ul>
      </div>
    </DetailInfoContainer>
  );
};

export default DetailInfo;
