import React from 'react';
import UserPageHeader from '../../components/UserPageHeader';
import {
  MyPageContainer,
  MyPageTop,
  MyPageMid,
  MyPageBottom,
} from './myPage.style';
import userIcon from '../../assets/img/user-colored-icon.svg';
import defaultIcon from '../../assets/img/default-icon.svg';
import cameraIcon from '../../assets/img/empty-camera-icon.svg';
import smileIcon from '../../assets/img/smile-icon.svg';
import reviewIcon from '../../assets/img/review-icon.svg';
import keyIcon from '../../assets/img/key-icon.svg';
import askIcon from '../../assets/img/question-mark-icon.svg';

const MyPage = () => {
  const locCats = ['서강대학교'];
  const foodCats = ['양식', '중식'];
  return (
    <MyPageContainer>
      <UserPageHeader>
        <div className="pageTitle">
          <img src={userIcon} alt="" />
          마이페이지
        </div>
      </UserPageHeader>
      <MyPageTop>
        <div className="userInfo">
          <div className="profileImgOuter">
            <img src={defaultIcon} alt="" className="profileImg" />
            <button type="button" className="changeProfileImgBtn">
              <img src={cameraIcon} alt="" className="" />
            </button>
          </div>
          <div className="userName">
            <span>알바트로스</span>님
          </div>
          <div className="changeName">수정하기</div>
        </div>
        <div className="myPageBtns">
          <div className="myPageBtn">
            <div className="count">1</div>
            심사중인
            <br />
            맛집
          </div>
          <div className="myPageBtn">
            <div className="count">1</div>
            추가한
            <br />
            맛집
          </div>
          <div className="myPageBtn">
            <div className="count">1</div>
            찜한
            <br />
            맛집
          </div>
        </div>
      </MyPageTop>
      <MyPageMid>
        <div className="explanationOuter">
          <img src={smileIcon} alt="" className="smileIcon" />
          <div className="explanation">
            <span className="bold">활동 영역</span>과 좋아하는{' '}
            <span className="bold">음식 종류</span>를 기준으로 맛집이 메인
            화면에서 추천됩니다.
          </div>
        </div>
        <div className="categoryOuter">
          <div className="categoryTitle">
            📌 <span>알바트로스</span>님의 활동 영역
          </div>
          <div className="categoryBody">
            <div className="categorySubTitle">위치</div>
            <div className="categories">
              {locCats.map((loc) => (
                <div key={loc} className="category">
                  {loc}
                </div>
              ))}
            </div>
            <button type="button" className="changeBtn">
              수정하기
            </button>
          </div>
        </div>
        <div className="categoryOuter">
          <div className="categoryTitle">
            📌 <span>알바트로스</span>님이 좋아하는 음식 종류
          </div>
          <div className="categoryBody">
            <div className="categorySubTitle">음식 종류</div>
            <div className="categories">
              {foodCats.map((food) => (
                <div key={food} className="category">
                  {food}
                </div>
              ))}
            </div>
            <button type="button" className="changeBtn">
              수정하기
            </button>
          </div>
        </div>
      </MyPageMid>
      <MyPageBottom>
        <div className="empty" />
        <button type="button" className="bottomBtn">
          <img src={reviewIcon} alt="" className="bottomBtnIcon" />
          리뷰
        </button>
        <button type="button" className="bottomBtn">
          <img src={keyIcon} alt="" className="bottomBtnIcon" />
          비밀번호 수정
        </button>
        <button type="button" className="bottomBtn">
          <img src={askIcon} alt="" className="bottomBtnIcon" />
          문의하기
        </button>
      </MyPageBottom>
    </MyPageContainer>
  );
};

export default MyPage;
