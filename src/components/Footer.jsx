/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import FooterContainer from './footer.style';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <span className="producers">만든이들</span> 오이소박
      </div>
      <p>&copy; Today's Lunch. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
