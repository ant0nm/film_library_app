import React, {useState, useContext} from 'react';
import Fave from './Fave';
import FilmPoster from './FilmPoster';
import FavesContext from './FavesContext';
import TMDB from './TMDB';

const FilmRow = ({film}) => {
  const favesContext = useContext(FavesContext);

  return (
    <article className="film-row" onClick={() => favesContext.toggleCurrentFilm(film)}>
      <FilmPoster film={film} />

      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date(film.release_date).getFullYear()}</p>
      </div>

      <Fave onFaveToggle={() => favesContext.toggleFave(film)} />
    </article>
  );
};

export default FilmRow;
