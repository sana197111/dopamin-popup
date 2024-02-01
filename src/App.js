import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Main } from './components/Main';
import { Poster } from './components/Poster';
import { Introduction } from './components/Introduction';
import { Register } from './components/Register';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Page2test } from './components/Page2test';
import './App.css';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
      <Routes location={location}>
        <Route path="/" element={<  Poster />} />
        <Route path="/main" element={<  Main />} />
        <Route path="/introduction" element={<  Introduction />} />
        <Route path="/register" element={<  Register />} />
        <Route path="/page1" element={<  Page1 />} />
        <Route path="/page2" element={<  Page2 />} />
        <Route path="/page2test" element={<  Page2test />} />
      </Routes>
  );
}

export default App;
