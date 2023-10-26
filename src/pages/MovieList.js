import { useState, useEffect } from 'react';

import { Card } from '../components';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=9198bf77bd8b4e483d8e72b65617d58c'
      );

      const data = await response.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
