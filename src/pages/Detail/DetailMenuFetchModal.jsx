/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { DetailMenuUpdateModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import warningIcon from '../../assets/img/warning-icon.svg';
import trashcanIcon from '../../assets/img/trashcan-icon.svg';
import { useFetchMenu } from './detail.helpers';
import DetailMenuDeleteModal from './DetailMenuDeleteModal';

const DetailMenuFetchModal = ({
  closeMenuFetchModal,
  menu,
  fetchMenu,
  deleteMenu,
}) => {
  const {
    name,
    setName,
    price,
    setPrice,
    setSalePrice,
    setSaleExplain,
    isWarning,
    isMenuDeleteModalOpen,
    setIsMenuDeleteModalOpen,
    handleFetchMenu,
  } = useFetchMenu();

  useEffect(() => {
    if (menu) {
      setName(menu.name);
      setPrice(menu.price);
      setSalePrice(menu.salePrice);
      setSaleExplain(menu.saleExplain);
    }
  }, [menu, setName, setPrice, setSaleExplain, setSalePrice]);

  return (
    <DetailMenuUpdateModalContainer>
      {isMenuDeleteModalOpen && (
        <DetailMenuDeleteModal
          closeModal={() => {
            setIsMenuDeleteModalOpen(false);
          }}
          deleteMenu={deleteMenu}
        />
      )}
      <div className="modalInner">
        <button
          className="closeBtn"
          type="button"
          onClick={closeMenuFetchModal}
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
              maxLength={20}
              placeholder="메뉴 이름"
              defaultValue={menu && menu.name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="number"
              className="updateInput menuPrice"
              placeholder="메뉴 가격"
              min="1"
              max="5"
              defaultValue={menu && menu.price}
              onChange={(e) => {
                const num = Number(e.target.value);
                if (num >= 0 && num < 1000000) setPrice(num);
                else if (num < 0) {
                  e.target.value = 0;
                  setPrice(0);
                } else {
                  e.target.value = 999999;
                  setPrice(999999);
                }
              }}
            />
            <span className="won">원</span>
          </div>
          <div className="warningDiv">
            {isWarning && (!price || !name) && '다음 항목을 입력해주세요:'}{' '}
            <span className="bold">
              {isWarning && !name && '이름'}
              {isWarning && !price && ' 가격'}
            </span>
          </div>
          <div className="saleUpdateTitle">
            세일정보 수정/추가 <span className="optional">[선택]</span>
          </div>
          <div className="saleUpdateInputOuter">
            <div className="saleInputLabel">세일 가격</div>
            <input
              type="number"
              className="updateInput salePrice"
              placeholder="세일 가격"
              defaultValue={menu && menu.salePrice}
              onChange={(e) => {
                const num = Number(e.target.value);
                if (num >= 0 && num < 1000000) {
                  if (num < price) setSalePrice(num);
                  else {
                    setSalePrice(price);
                    e.target.value = price;
                  }
                } else if (num < 0) {
                  e.target.value = 0;
                  setSalePrice(0);
                } else {
                  e.target.value = 999999;
                  setSalePrice(999999);
                }
              }}
            />
            <span className="won">원</span>
            <div className="saleInputLabel saleCommentLabel">세일 설명</div>
            <textarea
              placeholder="예)학생증을 보여주면 1,000원을 할인해줘요."
              className="updateInput saleComment"
              defaultValue={menu && menu.saleExplain}
              maxLength={200}
              onChange={(e) => {
                setSaleExplain(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="menuUpdateModalBtns">
          <button
            className="menuUpdateBtn"
            type="button"
            onClick={() => {
              handleFetchMenu(fetchMenu);
            }}
          >
            확인
          </button>
          {menu ? (
            <button
              type="button"
              className="menuDeleteBtn"
              onClick={() => {
                setIsMenuDeleteModalOpen(true);
              }}
            >
              <img src={trashcanIcon} alt="" className="" />
            </button>
          ) : null}
        </div>
      </div>
    </DetailMenuUpdateModalContainer>
  );
};

export default DetailMenuFetchModal;
