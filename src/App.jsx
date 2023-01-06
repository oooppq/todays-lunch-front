import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';

// import Play from './pages/play/Play';

const AppContainer = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Nav />
      <Footer />
    </AppContainer>
  );
};

export default App;
