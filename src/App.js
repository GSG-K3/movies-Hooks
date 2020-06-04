import React from 'react';
import './App.css';
import Movies from './Components/Movies/Movies';
import SearchBar from './Components/SearchBar/SearchBar';
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
