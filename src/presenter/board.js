import { MaxQuantityElement } from '../const';
import { remove, render, RenderPosition } from '../utils/render';
import FilmList from '../view/film-list';
import Films from '../view/films';
import MostCommentedList from '../view/most_comment_film_list';
import Navigation from '../view/navigation';
import NoFilm from '../view/no-film';
import Sort from '../view/sort';
import TopRatedList from '../view/top-rated-film-list';
import ButtonShowMore from '../view/button-show-more';
import Film from './film';
import { updateItem } from '../utils/common';

const FILMS_QUANTITY_PER_STEP = 5;

const FilmsContainer = {
  MAIN_FILMS: 'main',
  TOP_RATED_FILMS: 'topRated',
  MOST_COMMENTED: 'mostCommented',
};

export default class Board {
  constructor (moviesContainer) {
    this._mainContainer = moviesContainer;
    this._filmComponent = null;
    this._popupComponent = null;
    this._navigationComponent = new Navigation();
    this._sortComponent = new Sort();
    this._noFilmComponent = new NoFilm();
    this._filmListComponent = new FilmList();
    this._topRatedListComponent = new TopRatedList();
    this._mostCommentedList = new MostCommentedList();
    this._filmsComponent = new Films();
    this._buttonShowMoreComponent = new ButtonShowMore();

    this._filmListContainer =  this._filmListComponent.getElement().querySelector('.films-list__container');

    this._renderedFilmCount = FILMS_QUANTITY_PER_STEP;
    this._mainFilmsPresenter = new Map();
    this._topRatedFilmsPresenter = new Map();
    this._mostCommentedFilmsPresrnter = new Map();
    this._handlerButtonShowMoreClick = this._handlerButtonShowMoreClick.bind(this);
    this._handlerFilmChange = this._handlerFilmChange.bind(this);
  }

  init(boardFilms, comments) {
    this._boardFilms = boardFilms.slice();
    this._comments = comments.slice();

    this._renderSort();
    this._renderFilmsContainer();
    this._renderBoard();
  }

  _renderSort () {
    render(this._mainContainer, this._sortComponent, RenderPosition.BEFOREEND);
  }

  _handlerFilmChange (updateFilm) {
    console.log(this._boardFilms);
    this._boardFilms = updateItem(this._boardFilms, updateFilm);
    this._mainFilmsPresenter.get(updateFilm.id).init(updateFilm, this._comments);
  }

  _handlerButtonShowMoreClick () {
    this._renderFilms(this._renderedFilmCount, this._renderedFilmCount + FILMS_QUANTITY_PER_STEP, this._filmListContainer, this._boardFilms);

    this._renderedFilmCount += FILMS_QUANTITY_PER_STEP;
    if (this._renderedFilmCount >= this._boardFilms.length) {
      remove(this._buttonShowMoreComponent);
    }
  }

  _renderButtonShowMore () {
    render(this._filmListComponent, this._buttonShowMoreComponent, RenderPosition.BEFOREEND);

    this._buttonShowMoreComponent.setClickHandler(this._handlerButtonShowMoreClick);
  }

  _renderFilmList () {
    render(this._filmsComponent, this._filmListComponent, RenderPosition.BEFOREEND);
    this._renderFilms(0, Math.min(this._boardFilms.length, FILMS_QUANTITY_PER_STEP), this._filmListContainer, this._boardFilms);

    if (this._boardFilms.length > this._renderedFilmCount) {
      this._renderButtonShowMore();
    }
  }

  _renderTopRatedList () {
    const topRatedFilms = this._boardFilms.slice().sort((prev, next) => next.filmInfo.totalRating - prev.filmInfo.totalRating);

    render(this._filmsComponent, this._topRatedListComponent, RenderPosition.BEFOREEND);
    const topRatedListContainer = this._topRatedListComponent.getElement().querySelector('.films-list__container');
    this._renderFilms(0, Math.min(topRatedFilms.length, MaxQuantityElement.FILMS_TOP_RATED), topRatedListContainer, topRatedFilms);
  }

  _renderMostCommentedList () {
    const mostCommentedFilms = this._boardFilms.slice().sort((prev, next) => next.comments.length - prev.comments.length);

    render(this._filmsComponent, this._mostCommentedList, RenderPosition.BEFOREEND);
    const mostCommentedListContainer = this._filmsComponent.getElement().querySelector('.films-list--most-commented .films-list__container');
    this._renderFilms(0, Math.min(mostCommentedFilms.length, MaxQuantityElement.FILMS_MOST_COMMENT), mostCommentedListContainer, mostCommentedFilms);
  }

  _renderNofilm () {
    render(this._filmsComponent, this._noFilmComponent, RenderPosition.BEFOREEND);
  }

  _renderFilmsContainer () {
    render(this._mainContainer, this._filmsComponent, RenderPosition.BEFOREEND);
  }

  _renderFilm (container, film, comments) {
    const filmPresenter = new Film(container, this._handlerFilmChange);
    filmPresenter.init(film, comments);
    switch (container.dataset.typeList) {
      case FilmsContainer.MAIN_FILMS:
        this._mainFilmsPresenter.set(film.id, filmPresenter);
        break;
      case FilmsContainer.TOP_RATED_FILMS:
        this._topRatedFilmsPresenter.set(film.id, filmPresenter);
        break;
      case FilmsContainer.MOST_COMMENTED:
        this._mostCommentedFilmsPresrnter.set(film.id, filmPresenter);
        break;
    }
  }

  _renderFilms (from, to, container, films) {
    films
      .slice(from, to)
      .forEach((boardFilm) => {
        this._renderFilm(container, boardFilm, this._comments);
      });
  }

  _clearFilms () {
    this._mainFilmsPresenter.forEach((film) => film.destroy());
    this._mainFilmsPresenter.clear();
    this._renderedFilmCount = FILMS_QUANTITY_PER_STEP;
    remove(this._buttonShowMoreComponent);
  }

  _renderBoard () {
    if (this._boardFilms.length === 0) {
      this._renderNofilm();
      return;
    }
    this._renderFilmList();
    this._renderTopRatedList();
    this._renderMostCommentedList();
  }

}
