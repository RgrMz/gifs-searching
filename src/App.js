import React, {useState, useEffect} from 'react';
import './App.css';
import './components/Menu.css'
import ListOfGifs from './components/ListOfGifs'
import './components/ListOfGifs.css'

function searchClick() {

  return document.getElementById('search-txt').value;

}

function App() {
  
  const [searchTerm, setSearchTerm] = useState('Favorite')
  // Make a button for the searchTerm state to be able to change the searchTerm onClick
  return (
    <div className="App">
      <div id="sticky-menu">
        <input type="text" id="search-txt"></input>
        <button 
          id="search-btn" 
          type="button"
          onClick={() => {
            if (searchClick() === '')
              alert('You must enter the term/terms from which you want to get some gifs.');
            else
              setSearchTerm(searchClick())
            }}>
              Search Gifs
        </button>
        <a id="go-down" href='#footer-container'>Go down</a>
      </div>
      <section className="App-content">
        <div id="list-container">
          <ListOfGifs searchTerm={searchTerm} />
        </div>
      </section>
    </div>
  );
}

export default App;
