import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style';

import Main from './pages/main';
import Fail from './pages/fail';
import Pass from './pages/pass';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div
        style={{
          maxWidth: '1280px',
          margin: '0px auto',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/fail" element={<Fail />} />
          <Route path="/pass" element={<Pass />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
