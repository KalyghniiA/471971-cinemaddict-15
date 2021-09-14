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
import FilmListContainer from '../view/film-list-container';

const FILMS_QUANTITY_PER_STEP = 5;

export default class Board {
  constructor (moviesContainer) {
    this._mainContainer = moviesContainer;
    this._sortComponent = new Sort();
    this._noFilmComponent = new NoFilm();
    this._filmListComponent = new FilmList();
    this._topRatedListComponent = new TopRatedList();
    this._mostCommentedListComponent = new MostCommentedList();
    this._filmsComponent = new Films();
    this._buttonShowMoreComponent = new ButtonShowMore();

    this._renderedFilmCount = FILMS_QUANTITY_PER_STEP;
    this._mainFilmsPresenter = new Map();
    this._topRatedFilmsPresenter = new Map();
    this._mostCommentedFilmsPresenter = new Map();
    this._handlerButtonShowMoreClick = this._handlerButtonShowMoreClick.bind(this);
    this._handlerFilmChange = this._handlerFilmChange.bind(this);
    this._handlePopupChange = this._handlePopupChange.bind(this);
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
    this._sortComponent.setSortTypeChangeHandler(this._handlerSortTypeChange);
  }

  _handlerSortTypeChange (sortType) {

  }

  _handlerFilmChange (updateFilm) {
    this._boardFilms = updateItem(this._boardFilms, updateFilm);
    this._mainFilmsPresenter.get(updateFilm.id).init(updateFilm, this._comments);
    //this._topRatedFilmsPresenter.get(updateFilm.id).init(updateFilm, this._comments);
    //this._mostCommentedFilmsPresenter.get(updateFilm.id).init(updateFilm, this._comments);
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
    this._filmListContainer = new FilmListContainer();

    render(this._filmsComponent, this._filmListComponent, RenderPosition.BEFOREEND);
    render(this._filmListComponent, this._filmListContainer, RenderPosition.BEFOREEND);

    this._renderFilms(0, Math.min(this._boardFilms.length, FILMS_QUANTITY_PER_STEP), this._filmListContainer, this._boardFilms, this._mainFilmsPresenter);

    if (this._boardFilms.length > this._renderedFilmCount) {
      this._renderButtonShowMore();
    }
  }

  _renderTopRatedList () {
    this._filmListContainer = new FilmListContainer();
    const topRatedFilms = this._boardFilms.slice().sort((prev, next) => next.filmInfo.totalRating - prev.filmInfo.totalRating);

    render(this._filmsComponent, this._topRatedListComponent, RenderPosition.BEFOREEND);
    render(this._topRatedListComponent, this._filmListContainer, RenderPosition.BEFOREEND);

    this._renderFilms(0, Math.min(topRatedFilms.length, MaxQuantityElement.FILMS_TOP_RATED), this._filmListContainer, topRatedFilms, this._topRatedFilmsPresenter);
  }

  _renderMostCommentedList () {
    this._filmListContainer = new FilmListContainer();
    const mostCommentedFilms = this._boardFilms.slice().sort((prev, next) => next.comments.length - prev.comments.length);

    render(this._filmsComponent, this._mostCommentedListComponent, RenderPosition.BEFOREEND);
    render(this._mostCommentedListComponent,this._filmListContainer , RenderPosition.BEFOREEND);

    this._renderFilms(0, Math.min(mostCommentedFilms.length, MaxQuantityElement.FILMS_MOST_COMMENT), this._filmListContainer, mostCommentedFilms, this._mostCommentedFilmsPresenter);
  }

  _renderNofilm () {
    render(this._filmsComponent, this._noFilmComponent, RenderPosition.BEFOREEND);
  }

  _renderFilmsContainer () {
    render(this._mainContainer, this._filmsComponent, RenderPosition.BEFOREEND);
  }

  _renderFilm (container, film, comments, listType) {
    const filmPresenter = new Film(container, this._handlerFilmChange, this._handlePopupChange);

    filmPresenter.init(film, comments);
    listType.set(film.id, filmPresenter);

  }

  _renderFilms (from, to, container, films, listType) {
    films
      .slice(from, to)
      .forEach((boardFilm) => {
        this._renderFilm(container, boardFilm, this._comments, listType);
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

  _handlePopupChange () {
    this._mainFilmsPresenter.forEach((presenter) => {
      presenter.resetView();
    });
    this._topRatedFilmsPresenter.forEach((presenter) => {
      presenter.resetView();
    });
    this._mostCommentedFilmsPresenter.forEach((presenter) => {
      presenter.resetView();
    });
  }

}
