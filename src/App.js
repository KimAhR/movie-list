import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/movie-list/Header";
import MovieDetail from "./component/movie-list/MovieDetail";
import Home from "./component/movie-list/page/Home";
import Movie from "./component/movie-list/page/Movie";
import Person from "./component/movie-list/page/Person";
import TV from "./component/movie-list/page/TV";

function App() {
  return (
    <BrowserRouter basename="/kimahreum/movie-list">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="tv" element={<TV />} />
        <Route path="person" element={<Person />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
