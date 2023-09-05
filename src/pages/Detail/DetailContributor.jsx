/* eslint-disable react/prop-types */
import React from 'react';
import { DetailContributorContainer } from './detail.style';
import defaultIcon from '../../assets/img/detail-default-icon.svg';
import CroppedImage from '../../components/CroppedImage';

const DetailContributor = ({ contributors }) => {
  return (
    <DetailContributorContainer>
      <div className="title">📌 맛집 정보 기여자</div>
      <ul className="contributors">
        {contributors.map((user) => (
          <li key={user.id} className="contributorLi">
            <CroppedImage
              src={user.icon || defaultIcon}
              style={{
                marginBottom: '5px',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
              }}
            />
            {/* <img className="profileImg" src={user.icon || defaultIcon} alt="" /> */}
            <div className="nickName">{user.nickname}</div>
          </li>
        ))}
      </ul>
    </DetailContributorContainer>
  );
};

export default DetailContributor;
