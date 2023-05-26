/* eslint-disable react/prop-types */
import React from 'react';
import { DetailMenuUpdateModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import warningIcon from '../../assets/img/warning-icon.svg';
import trashcanIcon from '../../assets/img/trashcan-icon.svg';

const DetailMenuUpdateModal = ({ closeMenuUpdateModal, menu }) => {
  return (
    <DetailMenuUpdateModalContainer>
      <div className="modalInner">
        <button
          className="closeBtn"
          type="button"
          onClick={closeMenuUpdateModal}
        >
          <img src={xIcon} alt="" />
        </button>
        <div className="menuUpdateTitle">메뉴 {menu ? '수정' : '추가'}하기</div>
        <div className="menuUpdateWarning">
          <img className="warningIcon" src={warningIcon} alt="" />
          <div className="warningComment">
            {menu ? (
              <>
                메뉴 정보를 자유롭게 수정해주세요.
                <br />한 번 변경하면 복구할 수 없으므로 신중하게 진행해주세요.
              </>
            ) : (
              <>
                새로운 메뉴를 추가해주세요.
                <br />
                페이지 하단의 기여한 유저 목록에 프로필이 기록됩니다.
              </>
            )}
          </div>
        </div>
        <div className="menuUpdateBody">
          <div className="menuUpdateBodyTitle">
            메뉴정보 {menu ? '수정' : '추가'}
          </div>
          <div className="menuUpdateInputOuter">
            <input
              type="text"
              className="updateInput menuName"
              placeholder="메뉴 이름"
              defaultValue={menu && menu.name}
            />
            <input
              type="text"
              className="updateInput menuPrice"
              placeholder="메뉴 가격"
              defaultValue={menu && menu.price}
            />
            <span className="won">원</span>
          </div>

          <div className="saleUpdateTitle">
            세일정보 수정/추가 <span className="optional">[선택]</span>
          </div>

          <div className="saleUpdateInputOuter">
            <div className="saleInputLabel">세일 가격</div>
            <input
              type="text"
              className="updateInput salePrice"
              placeholder="세일 가격"
              defaultValue={menu && menu.salePrice}
            />
            <span className="won">원</span>
            <div className="saleInputLabel saleCommentLabel">세일 설명</div>
            <textarea
              placeholder="예)학생증을 보여주면 1,000원을 할인해줘요."
              className="updateInput saleComment"
              defaultValue={menu && menu.saleComment}
            />
          </div>
        </div>
        <div className="menuUpdateModalBtns">
          <button className="menuUpdateBtn" type="button">
            확인
          </button>
          <button type="button" className="menuDeleteBtn">
            <img src={trashcanIcon} alt="" className="" />
          </button>
        </div>
      </div>
    </DetailMenuUpdateModalContainer>
  );
};

export default DetailMenuUpdateModal;
