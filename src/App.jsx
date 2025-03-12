import React from 'react';
import Homepage from './pages/HomePage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import WorksPage from './pages/WorksPage/WorksPage';
import Nav from './components/Nav/Nav';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Nav/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;