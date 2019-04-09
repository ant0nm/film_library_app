import React, {useContext} from 'react';
import FavesContext from './FavesContext';

const FilmDetails = ({films}) => {
  const favesFromContext = useContext(FavesContext);

  let details;
  const film = favesFromContext.currentFilm;

  if (Object.keys(film).length) {
    console.log('inside details');
    const backdropURL = `https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`;
    const posterURL = `https://image.tmdb.org/t/p/w780/${film.poster_path}`

    details = (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropURL} alt="" />
          <h1 className="film-title">{film.title}</h1>
        </figure>

        <div className="film-meta">
          <h2 className="film-tagline">{film.tagline}</h2>
          <p className="film-detail-overview">
            <img src={posterURL} className="film-detail-poster" alt={film.title} />
            {film.overview}
          </p>
        </div>
      </div>
    );
  } else {
    console.log('outside details');
    details = (
      <div className="film-detail">
        <p>
          <i className="material-icons">subscriptions</i>
          <span> No film selected </span>
        </p>
      </div>
    );
  }

  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      {details}
    </div>
  );
};

export default FilmDetails;
