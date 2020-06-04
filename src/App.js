import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Movies from './Components/Movies/Movies';

function App() {
  return (
    <div className="App">
      <header className = 'header'>
        <img
          alt = 'icon'
          src="https://cdn3.iconfinder.com/data/icons/ui-03-basic-2/100/Basic__54-512.png"
          className="icon"
        />
        <h3>Movies Pool</h3>
      </header>
      <div>
        <p>Here you can discover the top 4 movies at any moment. That is not all!! Also you can search about any movie and know more information about it.</p>
      </div>
      <SearchBar />
      <h3>Top 4 Movies this moment</h3>
      <Movies />
    </div>
  );
}

export default App;
