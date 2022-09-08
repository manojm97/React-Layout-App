import React from 'react';
import './style.css';
import Main from '../src/components/Header';
import Bio from '../src/components/Bio';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/page2" element={<Bio />} />
        </Routes>
      </BrowserRouter>
  );
}
