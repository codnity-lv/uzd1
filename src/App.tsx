import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Majas from './components/Majas';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Bbf from './components/fetch/Bbf';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]); // Adjust the type as needed
/*
  const handleFetch = async (term: string) => {
    setLoading(true);
    try {
      const response = await fetch("https://noit.pro/cdv/?q=" + encodeURIComponent(term));
      const html = await response.text();

      const scriptContent = html;
      let res;
      try {
        res = eval(scriptContent); // Be cautious with using eval
        setResults(res);
      } catch (e) {
        console.error('Error executing script:', e);
      }
      console.log('Script execution result:', res);
    } catch (error) {
      console.error('Error fetching page:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch("piens"); // Automatically fetch on page load
  }, []);
*/
  return (
    <Router>
      <Header />
      {loading && <div className="loading-overlay">Loading...</div>}
      <Routes>
        <Route path="/" element={<Bbf results={results} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
