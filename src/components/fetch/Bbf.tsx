import React, { useEffect, useState } from 'react';

interface Item {
  image: string;
  price: string;
  title: string;
}

const Bbf: React.FC<{ term: string }> = ({ term }) => {
  const [items, setItems] = useState<Item[]>([]);

  const handleFetch = async (term: string) => {
    try {
    if(term.length <3) return;
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
    }
  };

  useEffect(() => {
    handleFetch(term);
  }, [term]);

  return (
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
  );
};

export default Bbf;
