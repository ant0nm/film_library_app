import React from 'react';
import FilmRow from './FilmRow';

const FilmList = ({films}) => {
  const filmList = films.map((film) => {
    return (
      <FilmRow film={film} key={film.id} />
    );
  });

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {filmList}
    </div>
  );
};

export default FilmList;
