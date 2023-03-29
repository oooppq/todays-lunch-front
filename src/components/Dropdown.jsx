/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { DropdownContainer } from './dropdown.style';

// selected 항목 각각 변수명 다르게 설정해서 전역 상태로 관리해야 할듯, 페이지 전환시 안바뀌어야 하기도 하고,
// 위치 카테고리가 설정되지 않으면 상세위치에 아무 항목도 없게끔 만들려면...
const Dropdown = ({
  data,
  selected,
  setSelected,
  defaultValue,
  style,
  isWhole,
  isRecommend,
}) => {
  const [isActive, setIsActive] = useState(false);

  const dropdownRef = useRef();
  const handleClickOutside = ({ target }) => {
    if (dropdownRef.current.contains(target)) setIsActive(!isActive);
    else setIsActive(false);
  };

  const whole = isWhole ? [{ id: 0, name: '전체' }] : [];
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <DropdownContainer ref={dropdownRef} styleInfo={style}>
      <button className="selectedLabel" type="button">
        <span className="label">
          {isRecommend ? <span className="hashTag"># </span> : null}
          {selected ? selected.name : defaultValue}
        </span>
        <span className="triangle"> ▼</span>
      </button>
      {isActive ? (
        <div
          className="optionContainer"
          onClick={() => {
            setIsActive(false);
          }}
          aria-hidden="true"
        >
          <ul className="optionUl">
            {whole.concat(data).map((elem) => (
              <li
                className="optionLi"
                key={elem.id}
                onClick={(e) => {
                  if (elem.id === 0) setSelected(null);
                  else setSelected(elem);
                  setIsActive(false);
                  e.stopPropagation();
                }}
                aria-hidden="true"
                style={
                  (!selected && elem.id === 0) ||
                  (selected && selected.id === elem.id)
                    ? { color: 'black' }
                    : { color: '#9a9a9a' }
                }
              >
                {isRecommend ? <span># </span> : null}
                {elem.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </DropdownContainer>
  );
};

export default Dropdown;
