import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MovieHomePage from './pages/movieHomePage/MovieHomePage';
import SearchedResult from './pages/searchedResult /SearchedResult';
import SingleMoviePage from './pages/singleMoviePage/SingleMoviePage';
import HomePage from './pages/homePage/HomePage';
import FilmGenres from './pages/filmGenres/FilmGenres';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/genre/:genreId/page/:page' element={<FilmGenres /> } />
        <Route path="/page/:page" element={<MovieHomePage />} />
        <Route path="/movies/:searchText/page/:page" element={<SearchedResult />} />
        <Route path="/movie/:id" element={<SingleMoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
