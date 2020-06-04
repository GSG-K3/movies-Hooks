import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar'
import Movies from './Components/Movies/Movies';

function App() {
  return (
    <div className="App">
      <Movies />
      <SearchBar />
    </div>
  );
}

export default App;
