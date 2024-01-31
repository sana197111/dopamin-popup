import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Main } from './components/Main';
import { Poster } from './components/Poster';
import { Introduction } from './components/Introduction';
import { Register } from './components/Register';
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
      </Routes>
  );
}

export default App;
