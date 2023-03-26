/* eslint-disable react/prop-types */
import React from 'react';
import { WarningContainer } from './warning.style';

const Warning = ({ element }) => {
  return <WarningContainer>⚠️ {element} 설정해주세요.</WarningContainer>;
};

export default Warning;
