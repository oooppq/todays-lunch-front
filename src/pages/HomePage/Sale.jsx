import React from 'react';
import { SaleContainer, SaleTitle, SaleUl, SaleLi } from './\bhomePage.style';
import defaultImage from '../../assets/img/default-image.png';

const Sale = () => {
  return (
    <SaleContainer>
      <SaleTitle className="bold">할인 정보</SaleTitle>
      <SaleUl>
        <SaleLi>
          <img src={defaultImage} alt="" />
          <div className="info">
            <div className="bold menu-name">마약맛 마약</div>
            <div className="store-name">드러그 스토어</div>
            <div className="original-price">10,000원</div>
            <div className="sale-price">7,000원</div>
          </div>
        </SaleLi>
        <SaleLi>
          <img src={defaultImage} alt="" />
          <div className="info">
            <div className="bold menu-name">마약맛 마약</div>
            <div className="store-name">드러그 스토어</div>
            <div className="original-price">10,000원</div>
            <div className="sale-price">7,000원</div>
          </div>
        </SaleLi>
        <SaleLi>
          <img src={defaultImage} alt="" />
          <div className="info">
            <div className="bold menu-name">마약맛 마약</div>
            <div className="store-name">드러그 스토어</div>
            <div className="original-price">10,000원</div>
            <div className="sale-price">7,000원</div>
          </div>
        </SaleLi>
      </SaleUl>
    </SaleContainer>
  );
};

export default Sale;
