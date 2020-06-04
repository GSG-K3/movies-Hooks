import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Movies from './Components/Movies/Movies';

function App() {
  return (
    <div className="App">
      <img
        src="https://cdn3.iconfinder.com/data/icons/ui-03-basic-2/100/Basic__54-512.png"
        className="icon"
      />
      <SearchBar />
      <Movies />
    </div>
  );
}

export default App;
