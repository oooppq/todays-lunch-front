/* eslint-disable react/prop-types */
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SaleContainer, SaleTitle, SaleUl, SaleLi } from './homePage.style';
import defaultImage from '../../assets/img/default-image.png';
import { convertNum, gotoDetailOnClick } from '../../libs/utils';

const queryClient = new QueryClient();

const SetData = ({ navigate }) => {
  // const { isLoading, error, data } = useQuery(['sales', 'list'], () =>
  const { data } = useQuery(['sales', 'list'], () =>
    axios.get('http://localhost:3004/sales').then((res) => res.data)
  );

  // if (isLoading) return null;
  // if (error) return 'error';

  return (
    <SaleContainer>
      <SaleTitle className="bold">
        💸 할인 <span>정보</span>
      </SaleTitle>
      <SaleUl>
        {data
          ? data.map((e) => (
              <SaleLi
                id={e.id}
                key={e.id}
                onClick={() => gotoDetailOnClick(e.id, navigate)}
              >
                <img src={defaultImage} alt="" />
                <div className="info">
                  <div className="storeName">{e.restaurant_name}</div>
                  <div className="menuName">{e.menu_name}</div>
                  <div className="priceDiv">
                    <div className="salePrice">
                      {convertNum(e.sale_price)}원
                    </div>
                    <div className="originalPrice">
                      {convertNum(e.original_price)}원
                    </div>
                  </div>
                </div>
              </SaleLi>
            ))
          : null}
      </SaleUl>
    </SaleContainer>
  );
};
const Sale = () => {
  const navigate = useNavigate();
  return (
    <QueryClientProvider client={queryClient}>
      <SetData navigate={navigate} />
    </QueryClientProvider>
  );
};

export default Sale;
