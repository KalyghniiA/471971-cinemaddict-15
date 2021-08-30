import {formatDate, getTimeFromMinutes } from '../utils/date';
import AbstractView from './abstract';

const ACTIVE_CLASS = 'film-card__controls-item--active';

const BLANK_FILM = {
  comments : '',
  filmInfo: {
    title: '',
    totalRating: {
      ratingFilm: 0,
    },
    poster: '',
    description: '',
    release: {
      date: '',
    },
    genre: [''],
    runtime: 20,
  },
  userDetails: {
    watchlist: false,
    alreadyWatched: false,
    favorite: false,
  },
};

const createFilmCardElement = (film) => {
  const {
    filmInfo: {
      title,
      totalRating: ratingFilm,
      release: {
        date,
      },
      runtime,
      genre,
      poster,
      description,
    },
    comments,
    userDetails: {
      watchlist,
      alreadyWatched,
      favorite,
    },
  } = film;

  return (
    `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${ratingFilm}</p>
    <p class="film-card__info">
      <span class="film-card__year">${formatDate(date, 'YYYY')}</span>
      <span class="film-card__duration">${getTimeFromMinutes(runtime)}</span>
      <span class="film-card__genre">${genre.join(', ')}</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlist ? ACTIVE_CLASS : ''}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${alreadyWatched ? ACTIVE_CLASS : ''}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${favorite ? ACTIVE_CLASS : ''}" type="button">Mark as favorite</button>
    </div>
  </article>`
  );};


export default class FilmCard extends AbstractView {
  constructor (film = BLANK_FILM) {
    super();
    this._film = film;
    this._openClickHandler = this._openClickHandler.bind(this);
  }

  getTemplate () {
    return createFilmCardElement(this._film);
  }

  _openClickHandler () {
    this._callback.openClick();
  }

  setOpenClickHandler (callback) {
    this._callback.openClick = callback;
    this
      .getElement()
      .querySelectorAll('.film-card__poster, .film-card__title, .film-card__comments')
      .forEach((element) => {
        element.addEventListener('click', this._openClickHandler);
      });
  }
}
