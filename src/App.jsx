import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Index from '@/pages/index';
import FirstSection from '@/components/sections/FirstSection';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
