import React from 'react';

const FilmPoster = ({film}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w780${film.poster_path}`;
  return (
    <figure className="film-poster">
      <img src={posterUrl} alt={film.title} />
    </figure>
  );
};

export default FilmPoster;
