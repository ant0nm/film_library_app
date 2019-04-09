import React, {useState, useContext} from 'react';
import FilmRow from './FilmRow';
import FavesContext from './FavesContext';

const FilmList = ({films}) => {
  const favesFromContext = useContext(FavesContext);
  const initialFilter = 'all';
  const [filter, setFilter] = useState(initialFilter);

  const selectedFilms = (filter === 'faves') ? favesFromContext.faves : films;

  const filmRows = selectedFilms.map((film) => {
    return (
      <FilmRow film={film} key={film.id} />
    );
  });

  const handleFilterClick = (filter) => {
    console.log(`Setting filter to ${filter}.`);
    setFilter(filter);
  };

  return (
    <div className="film-list">
      <h1 className="section-title">
        FILMS
      </h1>

      <div className="film-list-filters">
        <div className={`film-list-filter ${(filter === 'all') ? 'is-active' : ''}`} onClick={() => handleFilterClick('all')}>
          ALL
          <span className="section-count">{films.length}</span>
        </div>
        <div className={`film-list-filter ${(filter === 'faves') ? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')}>
          FAVES
          <span className="section-count">{favesFromContext.faves.length}</span>
        </div>
      </div>

      {filmRows}
    </div>
  );
};

export default FilmList;
