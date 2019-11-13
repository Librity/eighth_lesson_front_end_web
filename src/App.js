import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['NodeJS', 'Rails', 'Django', 'Laravel']);
  const [newTech, setNewTech] = useState('');

  const handleAdd = () => {
    setTechs([...techs, newTech]);
    setNewTech('');
  };

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
