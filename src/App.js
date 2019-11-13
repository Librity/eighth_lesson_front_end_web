import React, { useState, useEffect } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = () => {
    setTechs([...techs, newTech]);
    setNewTech('');
  };

  // Executes once, when page is loaded
  useEffect(() => {
    const storedTechs = localStorage.getItem('techs');

    if (storedTechs) {
      setTechs(JSON.parse(storedTechs));
    }

    // Executes when component unmounts
    return () => {};
  }, []);

  // Executes only when techs changes
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
