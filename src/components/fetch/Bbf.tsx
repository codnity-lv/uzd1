import React, { useEffect, useState } from 'react';

interface Item {
  image: string;
  price: string;
  title: string;
}

const Bbf: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [term, setTerm] = useState<string>('piens'); 

  const handleFetch = async (term: string) => {
    if (term && term.length < 3) return; // Minimum length check
    if (!term) return;

    setLoading(true); // Set loading to true before fetching

    try {
      const response = await fetch("https://noit.pro/cdv/?q=" + encodeURIComponent(term));

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const scriptContent = await response.text();

      let res;
      try {
        res = eval(scriptContent);
        setItems(res); 
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
    handleFetch(term);
  }, []);

  const handleSearch = () => {
    handleFetch(term);
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      {loading && <div className="loading-overlay">Loading...</div>} {/* Loading overlay */}
      
      {/* Search field and button */}
      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Ievadi ko meklēt"
          value={term}
          onChange={(e) => setTerm(e.target.value)} 
          onKeyDown={handleKeyDown}
          style={{ marginRight: '8px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSearch} style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
          Search
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {items.map((item, index) => (
          <div key={index} style={{ position: 'relative', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto' }} />
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '8px', textAlign: 'center' }}>
              <div>{item.price}</div>
              <div>{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bbf;
