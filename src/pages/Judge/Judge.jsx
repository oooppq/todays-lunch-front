import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JudgeNew from './JudgeNew';
import JudgeList from './JudgeList';
import JudgeHome from './JudgeHome';

const Judge = () => {
  return (
    <Routes>
      <Route path="/" element={<JudgeHome />} />
      <Route path="/new-judge" element={<JudgeNew />} />
      <Route path="/list" element={<JudgeList />} />
    </Routes>
  );
};

export default Judge;
