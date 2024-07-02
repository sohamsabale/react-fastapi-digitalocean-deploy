import React, { useEffect, useState } from 'react';
import './App.css'; // Import a CSS file for styling

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    fetch('http://142.93.67.138:8000/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false); // Update loading state when data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Update loading state on error
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>FastAPI and React App</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="data-container">
            <h2>Data from API:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
