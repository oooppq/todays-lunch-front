import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Restaurant from './pages/Restaurant/Restaurant';
import HomePage from './pages/HomePage/HomePage';
import Play from './pages/Play/Play';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import MyPage from './pages/MyPage/MyPage';
import JudgeHome from './pages/Judge/JudgeHome';
import JudgeNew from './pages/Judge/JudgeNew/JudgeNew';
import JudgeNow from './pages/Judge/JudgeNow/JudgeNow';
import MyRestaurant from './pages/MyPage/MyRestaurant/MyRestaurant';
import MyJudge from './pages/MyPage/MyJudge/MyJudge';
import MyReview from './pages/MyPage/MyReview/MyReview';
import WishList from './pages/MyPage/WishList/WishList';
import ModifyProfile from './pages/MyPage/ModifyProfile/ModifyProfile';
import { useAuth } from './libs/userAuth.helpers';

// const queryClient = new QueryClient();

const App = () => {
  // const location = useLocation();
  const { login, refresh, handleAuthState } = useAuth();

  useEffect(handleAuthState);
  // useEffect(() => {
  //   localStorage.removeItem('asdsadsads');
  // }, [handleTimeOut, location]);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/restaurants/:id" element={<Detail />} />
        <Route path="/play" element={<Play />} />
        <Route path="/restaurants-judge" element={<JudgeHome />} />
        <Route path="restaurants-judge/new" element={<JudgeNew />} />
        <Route path="restaurants-judge/now" element={<JudgeNow />} />
        <Route
          path="/login"
          element={<Login login={login} refresh={refresh} />}
        />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/my-judge" element={<MyJudge />} />
        <Route path="/mypage/my-restaurant" element={<MyRestaurant />} />
        <Route path="/mypage/my-review" element={<MyReview />} />
        <Route path="/mypage/wishList" element={<WishList />} />
        <Route path="/mypage/modify-profile" element={<ModifyProfile />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
