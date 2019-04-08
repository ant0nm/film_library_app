import React from 'react';
import TMDB from './TMDB';
import FilmList from './FilmList';
import FilmDetails from './FilmDetails';

const App = () => {

  return (
    <main className="film-library">
      <FilmList films={TMDB.films} />
      <FilmDetails films={TMDB.films} />
    </main>
  );
}

export default App;
