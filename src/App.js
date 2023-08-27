import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MovieHomePage from './pages/movieHomePage/MovieHomePage';
import './App.css';
import SearchedResult from './pages/searchedResult /SearchedResult';
import SingleMoviePage from './pages/singleMoviePage/SingleMoviePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/page/:page" element={<MovieHomePage />} />
        <Route path="/movies/:searchText" element={<SearchedResult />} />
        <Route path="/movie/:id" element={<SingleMoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
