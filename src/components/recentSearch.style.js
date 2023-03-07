import styled from 'styled-components';

export const RecentSearchContainer = styled.div`
  .title {
    font-size: 18px;
    font-family: Pretendard-Bold;
    margin-left: 1px;
    margin-bottom: 13px;
  }
`;

export const RecentSearchUl = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const RecentSearchLi = styled.li`
  display: flex;
  align-items: center;
  height: 37px;
  padding: 11px 0;
  border-bottom: 1px solid #e9e9e9;
  .resultIconOuter {
    box-sizing: border-box;
    border: 1px solid #bdbdbd;
    border-radius: 50%;
    padding: 9px;
    display: flex;
    align-items: center;
  }
  .resultIcon {
    width: 17px;
    height: 17px;
  }
  .name {
    font-size: 18px;
    margin-left: 17px;
    width: 170px;
    overflow-x: hidden;
    white-space: nowrap;
    margin-right: auto;
  }
  .date {
    font-size: 16px;
    color: #bdbdbd;
    margin-right: 7px;
  }
  .xIcon {
    width: 19px;
    height: 19px;
  }
`;
