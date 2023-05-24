/* eslint-disable react/prop-types */
import React from 'react';
import { DetailMenuUpdateModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import warningIcon from '../../assets/img/warning-icon.svg';

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
        <div className="menuUpdateTitle">메뉴판 수정하기</div>
        <div className="menuUpdateWarning">
          <img className="warningIcon" src={warningIcon} alt="" />
          <div className="warningComment">
            메뉴판 수정시, 신중히 진행해주세요.
            <br />
            수정할 메뉴를 클릭하여 수정해주세요.
            <br />
            메뉴 추가시, 아래 ‘+’ 버튼을 눌러주세요.
          </div>
        </div>
        <div className="menuUpdateBody">
          <div className="menuUpdateBodyTitle">메뉴</div>
          <ul className="menuUpdateBodyUl">
            <li className="menuUpdateBodyLi">
              <div className="menuUpdateBodyLiInner">
                <input type="text" className="menuName" value={menu.name} />
                <input type="text" className="menuPrice" value={menu.price} />
                <span className="won">원</span>
              </div>
            </li>
          </ul>
        </div>
        <button className="menuUpdateBtn" type="button">
          반영하기
        </button>
      </div>
    </DetailMenuUpdateModalContainer>
  );
};

export default DetailMenuUpdateModal;
