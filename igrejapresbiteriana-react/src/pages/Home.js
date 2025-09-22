import React from 'react';
import Hero from '../components/Hero/Hero';
import PastorSection from '../components/PastorSection/PastorSection';
import ReformaSection from '../components/ReformaSection/ReformaSection';
import AgendaSection from '../components/AgendaSection/AgendaSection';
import MinisterioSection from '../components/MinisterioSection/MinisterioSection';
import MapSection from '../components/MapSection/MapSection';
import DizimosSection from '../components/DizimosSection/DizimosSection';

const Home = () => {
  return (
    <main id="main-content">
      <Hero />
      <PastorSection />
      <ReformaSection />
      <AgendaSection />
      <MinisterioSection />
      <MapSection />
      <DizimosSection />
    </main>
  );
};

export default Home;
