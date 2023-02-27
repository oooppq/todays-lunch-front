/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import { JudgeSuccessContainer, JudgeSuccessInner } from './judge.style';
import xIcon from '../../assets/img/x-icon.svg';
import defaultIcon from '../../assets/img/default-icon.svg';

const JudgeSuccess = ({ setIsDone, data }) => {
  const fd = new FormData();
  const dataKeys = Object.keys(data);
  const dataValues = Object.values(data);
  for (let i = 0; i < dataKeys.length; i += 1) {
    fd.append(dataKeys[i], dataValues[i]);
  }

  const { mutate, isLoading } = useMutation((toSend) =>
    axios.post('/api/restaurants', toSend, {
      headers: {
        'Content-Type': `multipart/form-data; `,
      },
    })
  );
  const navigate = useNavigate();
  return (
    <JudgeSuccessContainer>
      <JudgeSuccessInner>
        <button
          type="button"
          className="xBtn"
          onClick={() => {
            setIsDone(false);
          }}
        >
          <img src={xIcon} alt="" />
        </button>
        <div className="content">
          {isLoading ? (
            <div>등록중입니다.</div>
          ) : (
            <div>
              맛집 추가가 성공적으로
              <br />
              완료되었습니다.
            </div>
          )}
          <img src={defaultIcon} alt="" />
          <div>감사합니다.</div>
        </div>
        {isLoading ? null : (
          <button
            type="button"
            className="doneBtn"
            onClick={() => {
              mutate(fd);

              navigate('../list');
            }}
          >
            다음
          </button>
        )}
      </JudgeSuccessInner>
    </JudgeSuccessContainer>
  );
};

export default JudgeSuccess;
