/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  JudgeSearchContainer,
  JudgeSearchInner,
  JudgeRecentSearchContainer,
} from '../judge.style';

import JudgeSearchResult from './JudgeSearchResult';
import JudgeSearchMap from './JudgeSearchMap';
import RecentSearch from '../../../components/RecentSearch';
import JudgeSearchTop from './JudgeSearchTop';
import JudgeNewSelected from './JudgeNewSelected';

const JudgeSearch = ({ setIsSearch }) => {
  const [result, setResult] = useState([]);
  const [pagination, setPagination] = useState();
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState('map');

  return (
    <JudgeSearchContainer>
      <JudgeSearchInner>
        <JudgeSearchTop
          setIsSearch={setIsSearch}
          setResult={setResult}
          setPagination={setPagination}
          setSelected={setSelected}
          setMode={setMode}
          mode={mode}
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
              <RecentSearch />
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
