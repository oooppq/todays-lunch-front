/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../../../redux/judgeNew';
import { OutModal, OutModalInner } from '../judge.style';
import xIcon from '../../../assets/img/x-icon.svg';

const JudgeNewOutModal = ({ setIsOut }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <OutModal>
      <OutModalInner>
        <button
          type="button"
          className="outModalXBtn"
          onClick={() => {
            setIsOut(false);
          }}
        >
          <img src={xIcon} alt="" />
        </button>
        <div className="outModalComment">
          <div className="commentUp">
            이 화면을 나가면 <br />
            작성 내용이 사라집니다.
          </div>
          <div className="commentDown">정말 나가시겠습니까?</div>
        </div>

        <div className="outModalBtns">
          <button
            type="button"
            onClick={() => {
              dispatch(reset());
              navigate(-1);
            }}
            className="yes"
          >
            네
          </button>
          <button
            type="button"
            onClick={() => {
              setIsOut(false);
            }}
            className="no"
          >
            아니요
          </button>
        </div>
      </OutModalInner>
    </OutModal>
  );
};

export default JudgeNewOutModal;
