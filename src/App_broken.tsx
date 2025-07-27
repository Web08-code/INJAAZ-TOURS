import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Home } from '@/pages/Home';
import { AboutUs } from '@/pages/AboutUs';
import { Destinations } from '@/pages/Destinations';
import { Tours } from '@/pages/Tours';
import { Contact } from '@/pages/Contact';
import { RequestQuote } from '@/pages/RequestQuote';
import { MaasaiMara } from '@/pages/MaasaiMara';
import { Amboseli } from '@/pages/Amboseli';
import { Tsavo } from '@/pages/Tsavo';
import { DianiBeach } from '@/pages/DianiBeach';
import { SafariTours } from '@/pages/SafariTours';
import { LuxurySafaris } from '@/pages/LuxurySafaris';
import { BudgetSafaris } from '@/pages/BudgetSafaris';
import { CustomPackages } from '@/pages/CustomPackages';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/destinations/maasai-mara" element={<MaasaiMara />} />
            <Route path="/destinations/amboseli" element={<Amboseli />} />
            <Route path="/destinations/tsavo" element={<Tsavo />} />
            <Route path="/destinations/diani-beach" element={<DianiBeach />} />
            <Route path="/tours/safari" element={<SafariTours />} />
            <Route path="/tours/luxury" element={<LuxurySafaris />} />
            <Route path="/tours/budget" element={<BudgetSafaris />} />
            <Route path="/tours/custom" element={<CustomPackages />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;