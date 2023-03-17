import React from 'react';
import { DetailContributorContainer } from './detail.style';
import defaultIcon from '../../assets/img/detail-default-icon.svg';

const data = [
  { id: 1, nickname: '오대균' },
  { id: 2, nickname: '이종미' },
];
const DetailContributor = () => {
  return (
    <DetailContributorContainer>
      <div className="title">📌 맛집 정보 기여자</div>
      <ul className="contributors">
        {data.map((user) => (
          <li key={user.id} className="contributorLi">
            <img className="profileImg" src={defaultIcon} alt="" />
            <div className="nickName">{user.nickname}</div>
          </li>
        ))}
      </ul>
    </DetailContributorContainer>
  );
};

export default DetailContributor;
