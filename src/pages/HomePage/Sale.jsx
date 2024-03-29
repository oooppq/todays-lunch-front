/* eslint-disable react/prop-types */
import React from 'react';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SaleContainer, SaleTitle, SaleUl, SaleLi } from './homePage.style';
import defaultImage from '../../assets/img/default-image.png';
import { convertNum, flattenPages, gotoDetailOnClick } from '../../libs/utils';
import { useInfiniteScroll } from '../../libs/common.helpers';
import saleIcon from '../../assets/img/sale-icon.png';
import CroppedImage from '../../components/CroppedImage';

const SetData = ({ navigate }) => {
  const {
    data: sales,
    // isFetching: salesIsFetching,
    // isError: salesIsError,
    // hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ['sales', 'list'],
    ({ pageParam = 0 }) =>
      axios
        .get(
          `${import.meta.env.VITE_API_BASE_URL}/menus/sale?page=${pageParam}`
        )
        .then((res) => {
          return {
            data: res.data.data,
            pageNum: pageParam,
            isLast: pageParam >= res.data.totalPages - 1,
          };
        }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.isLast) return undefined;
        return lastPage.pageNum + 1;
      },
      refetchOnWindowFocus: false,
    }
  );

  const { observerRef } = useInfiniteScroll(sales, fetchNextPage);
  // if (isLoading) return null;
  // if (error) return 'error';

  return (
    <SaleContainer>
      <SaleTitle className="bold">
        <img src={saleIcon} alt="" className="saleIcon" />
        할인 <span>정보</span>
      </SaleTitle>
      {sales && (
        <SaleUl>
          {flattenPages(sales.pages).map((e) => (
            <SaleLi
              id={e.id}
              key={e.imageUrl}
              onClick={() => gotoDetailOnClick(e.restaurantId, navigate)}
            >
              <CroppedImage
                style={{ width: '166px', height: '166px' }}
                src={e.imageUrl || defaultImage}
              />

              <div className="info">
                <div className="storeName">{e.restaurantName}</div>
                <div className="menuName">{e.name}</div>
                <div className="priceDiv">
                  <div className="salePrice">{convertNum(e.salePrice)}원</div>
                  <div className="originalPrice">{convertNum(e.price)}원</div>
                </div>
              </div>
            </SaleLi>
          ))}
          <div ref={observerRef} className="observer" />
        </SaleUl>
      )}
    </SaleContainer>
  );
};
const Sale = () => {
  const navigate = useNavigate();
  return <SetData navigate={navigate} />;
};

export default Sale;
