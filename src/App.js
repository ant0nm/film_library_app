import React, {useState} from 'react';
import TMDB from './TMDB';
import FilmList from './FilmList';
import FilmDetails from './FilmDetails';
import FavesContext from './FavesContext';
import axios from 'axios';

const App = () => {
  const [faves, setFaves] = useState([]);
  const [currentFilm, setCurrentFilm] = useState({});

  const onFaveToggle = (film) => {
    const favesCopy = faves.slice();
    const filmIndex = faves.indexOf(film);
    if (filmIndex > -1) {
      // remove it from faves
      console.log(`Removing ${film.title} to faves`);
      favesCopy.splice(filmIndex, 1);
      setFaves(favesCopy);
    } else {
      console.log(`Adding ${film.title} from faves`);
      setFaves([...favesCopy, film]);
    }
  };

  const handleFilmDetails = (film) => {
    console.log(`Fetching details for ${film.title}!`);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

    axios.get(url).then(response => {
      console.log(response.data);
      setCurrentFilm(response.data);
    });
  };

  return (
    <main className="film-library">
      <FavesContext.Provider value={{faves, toggleFave: onFaveToggle, currentFilm, toggleCurrentFilm: handleFilmDetails}}>
        <FilmList films={TMDB.films} />
        <FilmDetails films={TMDB.films} />
      </FavesContext.Provider>
    </main>
  );
}

export default App;
