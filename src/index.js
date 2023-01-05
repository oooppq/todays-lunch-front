import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>making react project without using CRA</div>
  </React.StrictMode>
);

const test = () => {
  console.log('test!');
};

const test2 = async () => {
  await Promise();
};

test();
test2();
