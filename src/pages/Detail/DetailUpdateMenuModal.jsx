/* eslint-disable react/prop-types */
import React from 'react';
import { DetailUpdateMenuModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import warningIcon from '../../assets/img/warning-icon.svg';
import addIcon from '../../assets/img/add-icon.svg';
import { convertNum } from '../../libs/utils';

const DetailUpdateMenuModal = ({ closeUpdateMenuModal, menuData }) => {
  return (
    <DetailUpdateMenuModalContainer>
      <div className="modalInner">
        <button
          className="closeBtn"
          type="button"
          onClick={() => closeUpdateMenuModal()}
        >
          <img src={xIcon} alt="" />
        </button>
        <div className="updateMenuTitle">메뉴판 수정하기</div>
        <div className="updateMenuWarning">
          <img className="warningIcon" src={warningIcon} alt="" />
          <div className="warningComment">
            메뉴판 수정시, 신중히 진행해주세요.
            <br />
            수정할 메뉴를 클릭하여 수정해주세요.
            <br />
            메뉴 추가시, 아래 ‘+’ 버튼을 눌러주세요.
          </div>
        </div>
        <div className="updateMenuBody">
          <div className="updateMenuBodyTitle">메뉴</div>
          <ul className="updateMenuBodyUl">
            {menuData.map((menu) => (
              <li className="updateMenuBodyLi">
                <div className="updateMenuBodyLiInner">
                  <div className="menuName">{menu.name}</div>
                  <div className="menuPrice">{convertNum(menu.price)}원</div>
                </div>
              </li>
            ))}
          </ul>
          <button className="newMenuBtn" type="button">
            <img src={addIcon} alt="" />
          </button>
        </div>
        <button className="updateMenuBtn" type="button">
          반영하기
        </button>
      </div>
    </DetailUpdateMenuModalContainer>
  );
};
export default DetailUpdateMenuModal;
