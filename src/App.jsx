import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
// import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import HomePage from './pages/HomePage/HomePage';
import Play from './pages/Play/Play';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import MyPage from './pages/MyPage/MyPage';

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
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/play" element={<Play />} />
        <Route path="/judge" element={<Map />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/restaurants/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
};

export default App;
