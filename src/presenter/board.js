import {MaxQuantityElement, SortType, UpdateType, UserAction} from '../const';
import { remove, render, RenderPosition } from '../utils/render';
import FilmList from '../view/film-list';
import Films from '../view/films';
import MostCommentedList from '../view/most_comment_film_list';
import NoFilm from '../view/no-film';
import Sort from '../view/sort';
import TopRatedList from '../view/top-rated-film-list';
import ButtonShowMore from '../view/button-show-more';
import Film from './film';
import FilmListContainer from '../view/film-list-container';
import dayjs from 'dayjs';

const FILMS_QUANTITY_PER_STEP = 5;

export default class Board {
  constructor (moviesContainer, filmsModel, commentsModel) {
    this._mainContainer = moviesContainer;

    this._noFilmComponent = new NoFilm();
    this._filmListComponent = new FilmList();
    this._topRatedListComponent = new TopRatedList();
    this._mostCommentedListComponent = new MostCommentedList();
    this._filmsComponent = new Films();


    this._filmsModel = filmsModel;
    this._commentsModel = commentsModel;


    this._sortComponent = null;
    this._buttonShowMoreComponent = null;

    this._renderedFilmCount = FILMS_QUANTITY_PER_STEP;
    this._mainFilmsPresenter = new Map();
    this._topRatedFilmsPresenter = new Map();
    this._mostCommentedFilmsPresenter = new Map();
    this._currentSortType = SortType.DEFAULT;
    this._handlerButtonShowMoreClick = this._handlerButtonShowMoreClick.bind(this);
    this._handlerFilmChange = this._handlerFilmChange.bind(this);
    this._handlePopupChange = this._handlePopupChange.bind(this);
    this._handlerSortTypeChange = this._handlerSortTypeChange.bind(this);
  }

  init() {
    this._renderSort();
    this._renderFilmsContainer();
    this._renderBoard();
  }

  _getFilms () {
    switch (this._currentSortType) {
      case SortType.BY_DATE:
        return this._filmsModel
          .getFilms()
          .slice()
          .sort((prev, next) => dayjs(prev.filmInfo.release.date).diff(dayjs(next.filmInfo.release.date)));
      case SortType.BY_RATING:
        return this._filmsModel
          .getFilms()
          .sort((prev, next) => next.filmInfo.totalRating - prev.filmInfo.totalRating);
    }
    return this._filmsModel.getFilms();
  }

  _getComments () {
    return this._commentsModel.getComments();
  }

  _renderSort () {
    render(this._mainContainer, this._sortComponent, RenderPosition.BEFOREEND);
    this._sortComponent.setSortTypeChangeHandler(this._handlerSortTypeChange);
  }

  _handlerSortTypeChange (sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;
    this._clearFilms();
    this._renderFilmList();
  }


  _handlerButtonShowMoreClick () {
    const filmsCount = this._getFilms().length;
    const newRenderedFilmsCount = Math.min(filmsCount, this._renderedFilmCount + FILMS_QUANTITY_PER_STEP);
    const films = this._getFilms().slice(this._renderedFilmCount, newRenderedFilmsCount);

    this._renderFilms( this._filmListContainer, films, this._mainFilmsPresenter);

    this._renderedFilmCount = newRenderedFilmsCount;

    if (this._renderedFilmCount >= filmsCount) {
      remove(this._buttonShowMoreComponent);
    }
  }

  _renderButtonShowMore () {
    render(this._filmListComponent, this._buttonShowMoreComponent, RenderPosition.BEFOREEND);

    this._buttonShowMoreComponent.setClickHandler(this._handlerButtonShowMoreClick);
  }

  _renderFilmList () {
    this._filmListContainer = new FilmListContainer();

    const filmsCount = this._getFilms().length;
    const films = this._getFilms().slice(0, Math.min(filmsCount, FILMS_QUANTITY_PER_STEP));

    render(this._filmsComponent, this._filmListComponent, RenderPosition.AFTERBEGIN);
    render(this._filmListComponent, this._filmListContainer, RenderPosition.BEFOREEND);

    this._renderFilms( this._filmListContainer, films, this._mainFilmsPresenter);

    if (filmsCount > this._renderedFilmCount) {
      this._renderButtonShowMore();
    }
  }

  _renderTopRatedList () {
    this._filmListContainer = new FilmListContainer();
    const topRatedFilms = this._getFilms().slice().sort((prev, next) => next.filmInfo.totalRating - prev.filmInfo.totalRating).slice(0, MaxQuantityElement.FILMS_TOP_RATED);

    render(this._filmsComponent, this._topRatedListComponent, RenderPosition.BEFOREEND);
    render(this._topRatedListComponent, this._filmListContainer, RenderPosition.BEFOREEND);

    this._renderFilms(this._filmListContainer, topRatedFilms, this._topRatedFilmsPresenter);
  }

  _renderMostCommentedList () {
    this._filmListContainer = new FilmListContainer();
    const mostCommentedFilms = this._getFilms().slice().sort((prev, next) => next.comments.length - prev.comments.length).slice(0, MaxQuantityElement.FILMS_MOST_COMMENT);

    render(this._filmsComponent, this._mostCommentedListComponent, RenderPosition.BEFOREEND);
    render(this._mostCommentedListComponent,this._filmListContainer , RenderPosition.BEFOREEND);

    this._renderFilms(this._filmListContainer, mostCommentedFilms, this._mostCommentedFilmsPresenter);
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

  _renderFilms (container, films, listType) {
    films
      .forEach((boardFilm) => {
        this._renderFilm(container, boardFilm, this._getComments(), listType);
      });
  }

  _clearFilms () {
    this._mainFilmsPresenter.forEach((film) => film.destroy());
    this._mainFilmsPresenter.clear();
    this._renderedFilmCount = FILMS_QUANTITY_PER_STEP;
    remove(this._buttonShowMoreComponent);
    this._filmListComponent.getElement().removeChild(this._filmListComponent.getElement().querySelector('.films-list__container'));

  }

  _clearBoard () {
    this._mainFilmsPresenter.forEach((film) => film.destroy());
    this._mainFilmsPresenter.clear();
    this._topRatedFilmsPresenter.forEach((film) => film.destroy());
    this._topRatedFilmsPresenter.clear();
    this._mostCommentedFilmsPresenter.forEach((film) => film.destroy());
    this._mostCommentedFilmsPresenter.clear();
    remove();
  }

  _renderBoard () {
    const filmsCount = this._getFilms().length;
    if (filmsCount === 0) {
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

  _redrawingCard (data) {
    const mainPresenter = this._mainFilmsPresenter.get(data.id);
    if (mainPresenter) {
      mainPresenter.init(data, this._getComments());
    }
    const topRatedPresenter = this._topRatedFilmsPresenter.get(data.id);
    if (topRatedPresenter) {
      topRatedPresenter.init(data, this._getComments());
    }
    const mostCommentedPresenter = this._mostCommentedFilmsPresenter.get(data.id);
    if (mostCommentedPresenter) {
      mostCommentedPresenter.init(data, this._getComments());
    }
  }

  _handleViewAction (actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_TASK:
        this._filmsModel.updateFilms(updateType, update);
        break;
      case UserAction.ADD_COMMENT:
        this._commentsModel.addComments(updateType, update);
        break;
      case UserAction.DELETE_COMMENT:
        this._commentsModel.deleteComments(updateType, update);
        break;
    }
  }

  _handleModelEvent (updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._redrawingCard(data);
        break;
      case UpdateType.MINOR:
        this._clearFilms();
        this._renderFilmList();
        break;
      case UpdateType.MAJOR:
        this._clearFilms();

    }
  }

}
