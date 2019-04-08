import React, {useContext} from 'react';
import Fave from './Fave';
import FavesContext from './FavesContext';
import FilmPoster from './FilmPoster';

const FilmRow = ({film}) => {
  const favesContext = useContext(FavesContext);
  const handleFilmDetail = () => {
    console.log(`Showing details for ${film.title}`);
  };

  return (
    <article className="film-row" onClick={handleFilmDetail}>
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
