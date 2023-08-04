/* eslint-disable react/prop-types */
import React from 'react';
import { DetailContributorContainer } from './detail.style';
import defaultIcon from '../../assets/img/detail-default-icon.svg';

const DetailContributor = ({ contributors }) => {
  return (
    <DetailContributorContainer>
      <div className="title">📌 맛집 정보 기여자</div>
      <ul className="contributors">
        {contributors.map((user) => (
          <li key={user.id} className="contributorLi">
            <img
              className="profileImg"
              src={user.profileImage || defaultIcon}
              alt=""
            />
            <div className="nickName">{user.nickname}</div>
          </li>
        ))}
      </ul>
    </DetailContributorContainer>
  );
};

export default DetailContributor;
