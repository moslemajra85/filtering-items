import { useEffect, useState } from 'react';
import movieItems from './movies';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movieItems);

  const filterMovies = (criteria) => {
    setFilteredMovies(movies.filter((movie) => movie.genre === criteria));
  };

  useEffect(() => {
    setMovies(movieItems);
  }, []);

  return (
    <div className="p-4 m-2 border rounded">
      <Filter filterMovies={filterMovies} movies={movies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
