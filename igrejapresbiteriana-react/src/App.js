import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import EventsBanner from './components/EventsBanner/EventsBanner';
import Footer from './components/Footer/Footer';
import PopupModal from './components/PopupModal/PopupModal';
import Home from './pages/Home';
import CalvinoPage from './pages/CalvinoPage';
import LuteroPage from './pages/LuteroPage';
import AshbelPage from './pages/AshbelPage';
import PastorPage from './pages/PastorPage';
import EscalasPage from './pages/EscalasPage';
import SobrePage from './pages/SobrePage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <PopupModal />
        <Header />
        <EventsBanner />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Páginas dos Reformadores */}
          <Route path="/calvino" element={<CalvinoPage />} />
          <Route path="/lutero" element={<LuteroPage />} />
          <Route path="/ashbel" element={<AshbelPage />} />
          {/* Outras páginas em desenvolvimento */}
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/pastor" element={<PastorPage />} />
          <Route path="/escalas" element={<EscalasPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
