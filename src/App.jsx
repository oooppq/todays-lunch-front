import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
// import Home from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';
import HomePage from './pages/HomePage/HomePage';
import Play from './pages/Play/Play';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import MyPage from './pages/MyPage/MyPage';
import Judge from './pages/Judge/Judge';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/play" element={<Play />} />
        <Route path="/restaurants-judge" element={<Judge />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/restaurants/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
