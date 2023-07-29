/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  JudgeSearchContainer,
  JudgeSearchInner,
  JudgeRecentSearchContainer,
} from './judgeNew.style';
import JudgeSearchResult from './JudgeSearchResult';
import JudgeSearchMap from './JudgeSearchMap';
import RecentSearch from '../../../components/RecentSearch';
import JudgeSearchTop from './JudgeSearchTop';
import JudgeNewSelected from './JudgeNewSelected';
import { pushRecentSearch } from '../../../libs/utils';

const JudgeSearch = ({ setIsSearch }) => {
  const [result, setResult] = useState([]);
  const [pagination, setPagination] = useState();
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState('map');
  const [keyBuffer, setKeyBuffer] = useState('');
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef();
  const judgeNewState = useSelector((state) => state.judgeNew);
  useEffect(() => {
    if (judgeNewState.restaurantName) {
      const prev = {
        place_name: judgeNewState.restaurantName,
        address_name: judgeNewState.address,
        x: judgeNewState.longitude,
        y: judgeNewState.latitude,
      };
      setSelected(prev);
      setResult([prev]);
    }
  }, [
    judgeNewState.restaurantName,
    judgeNewState.address,
    judgeNewState.longitude,
    judgeNewState.latitude,
  ]);
  const searchActions = (input) => {
    setKeyword(input);
    setMode('result');

    setSelected(null);
    pushRecentSearch('recentSearch/judge', input, 0);
    inputRef.current.blur();
  };

  return (
    <JudgeSearchContainer>
      <JudgeSearchInner>
        <JudgeSearchTop
          setIsSearch={setIsSearch}
          setResult={setResult}
          setPagination={setPagination}
          setMode={setMode}
          mode={mode}
          keyBuffer={keyBuffer}
          setKeyBuffer={setKeyBuffer}
          keyword={keyword}
          inputRef={inputRef}
          searchActions={searchActions}
        />
        {(() => {
          if (mode === 'map')
            return (
              <JudgeSearchMap
                data={result}
                selected={selected}
                setSelected={setSelected}
              />
            );
          if (mode === 'result')
            return (
              <JudgeSearchResult
                data={result}
                pagination={pagination}
                setMode={setMode}
                setSelected={setSelected}
              />
            );
          return (
            <JudgeRecentSearchContainer>
              <RecentSearch
                data={(() => {
                  const recentSearch =
                    JSON.parse(localStorage.getItem('recentSearch/judge')) ||
                    [];
                  recentSearch.forEach((e) => {
                    if (e.isLocation) {
                      e.onClickHandler = () => {
                        setKeyBuffer(e.title);
                        setKeyword('SKIP_SEARCHING');
                        setSelected(e.place_data);
                        setResult([e.place_data]);
                        setMode('map');
                        pushRecentSearch(
                          'recentSearch/judge',
                          e.title,
                          1,
                          e.place_data
                        );
                      };
                    } else {
                      e.onClickHandler = () => {
                        setKeyBuffer(e.title);
                        searchActions(e.title);
                      };
                    }
                  });
                  return recentSearch;
                })()}
              />
            </JudgeRecentSearchContainer>
          );
        })()}
        {mode === 'map' && selected ? (
          <JudgeNewSelected setIsSearch={setIsSearch} selected={selected} />
        ) : null}
      </JudgeSearchInner>
    </JudgeSearchContainer>
  );
};

export default JudgeSearch;
