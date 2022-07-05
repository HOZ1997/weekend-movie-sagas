import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieGenres from '../MovieGenres/MovieGenres'

function App() {
 
 
 
 
 
 
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList/>
        </Route>
        <Route path="/movies">
        </Route>
          <Route path="/details">
            <MovieDetails/>
          </Route>
          <Route path="/genres">
            <MovieGenres/>
          </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
