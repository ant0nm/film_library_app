import React, {useState} from 'react';
import TMDB from './TMDB';
import FilmList from './FilmList';
import FavesContext from './FavesContext';
import FilmDetails from './FilmDetails';

const App = () => {
  const [faves, setFaves] = useState([]);

  const onFaveToggle = (film) => {
    const favesCopy = faves.slice();
    const filmIndex = faves.indexOf(film);
    if (filmIndex > -1) {
      // remove it from faves
      console.log(`Removing ${film.title} from faves`);
      favesCopy.splice(filmIndex, 1);
      setFaves(favesCopy);
    } else {
      console.log(`Adding ${film.title} to faves`);
      setFaves([...favesCopy, film]);
    }
  };

  return (
    <main className="film-library">
      <FavesContext.Provider value={{faves, toggleFave: onFaveToggle}}>
        <FilmList films={TMDB.films} />
        <FilmDetails films={TMDB.films} />
      </FavesContext.Provider>
    </main>
  );
}

export default App;
