import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch('http://localhost:8000/')
    fetch('http://142.93.67.138:8000/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>FastAPI and React App</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
