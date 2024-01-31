import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Main } from './components/Main';
import { Introduction } from './components/Introduction';
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
        <Route path="/" element={<  Main />} />
        <Route path="/introduction" element={<  Introduction />} />
      </Routes>
  );
}

export default App;
