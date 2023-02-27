import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import './assets/font/font.css';
import App from './App';
// import HomePage from './pages/HomePage/HomePage';
// import Restaurant from './redux/restaurant';
// import Play from './pages/Play/Play';
// import Judge from './pages/Judge/Judge';
// import Login from './pages/Login/Login';
// import Join from './pages/Join/Join';
// import MyPage from './pages/MyPage/MyPage';
// import Detail from './pages/Detail/Detail';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: 'home',
//         element: <HomePage />,
//       },
//       {
//         path: 'restaurants',
//         element: <Restaurant />,
//       },
//       {
//         path: 'play',
//         element: <Play />,
//       },
//       {
//         path: 'restaurants-judge/*',
//         element: <Judge />,
//       },
//       {
//         path: 'login',
//         element: <Login />,
//       },
//       {
//         path: 'join',
//         element: <Join />,
//       },
//       {
//         path: 'mypage',
//         element: <MyPage />,
//       },
//       { path: 'restaurants/:id', element: <Detail /> },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
