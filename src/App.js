import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Main } from './components/Main';
import { Barcode } from './components/Barcode';
import { Poster } from './components/Poster';
import { Introduction } from './components/Introduction';
import { Register } from './components/Register';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Page3 } from './components/Page3';
import { Page4 } from './components/Page4';
import { Page2Test } from './components/Page2Test';
import { Page3Test } from './components/Page3Test';
import { Page3Question } from './components/Page3Question';
import { Page3Result } from './components/Page3Result';
import { Page4Result } from './components/Page4Result';
import { Consultant } from './components/Consultant';
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
        <Route path="/barcode" element={<  Barcode />} />
        <Route path="/introduction" element={<  Introduction />} />
        <Route path="/register" element={<  Register />} />
        <Route path="/page1" element={<  Page1 />} />
        <Route path="/page2" element={<  Page2 />} />
        <Route path="/page3" element={<  Page3 />} />
        <Route path="/page4" element={<  Page4 />} />
        <Route path="/page2test" element={<  Page2Test />} />
        <Route path="/page3test" element={<  Page3Test />} />
        <Route path="/page3question/:typeNumber" element={< Page3Question />} />
        <Route path="/page3result/:typeNumber" element={< Page3Result />} />
        <Route path="/page4result" element={< Page4Result />} />
        <Route path="/consultant" element={<  Consultant />} />
      </Routes>
  );
}

export default App;
