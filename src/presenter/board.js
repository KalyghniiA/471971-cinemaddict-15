import {MaxQuantityElement, SortType, UserAction, UpdateType, FilterType} from '../const';
import { remove, render, RenderPosition } from '../utils/render';
import FilmListView from '../view/film-list';
import FilmsView from '../view/films';
import MostCommentedListView from '../view/most_comment_film_list';
import NoFilmView from '../view/no-film';
import SortView from '../view/sort';
import TopRatedListView from '../view/top-rated-film-list';
import ButtonShowMoreView from '../view/button-show-more';
import FilmPresenter from './film';
import FilmListContainerView from '../view/film-list-container';
import dayjs from 'dayjs';
import {filter} from '../utils/filter';

const FILMS_QUANTITY_PER_STEP = 5;

export default class Board {
  constructor (moviesContainer, filmsModel, commentsModel, filterModel) {
    this._mainContainer = moviesContainer;


    this._filmListComponent = new FilmListView();
    this._topRatedListComponent = new TopRatedListView();
    this._mostCommentedListComponent = new MostCommentedListView();
    this._filmsComponent = new FilmsView();


    this._filmsModel = filmsModel;
    this._commentsModel = commentsModel;
    this._filterModel = filterModel;

    this._filterType = FilterType.ALL;
    this._sortComponent = null;
    this._buttonShowMoreComponent = null;
    this._noFilmComponent = null;

    this._renderedFilmCount = FILMS_QUANTITY_PER_STEP;
    this._mainFilmsPresenter = new Map();
    this._topRatedFilmsPresenter = new Map();
    this._mostCommentedFilmsPresenter = new Map();
    this._currentSortType = SortType.DEFAULT;
    this._handlerButtonShowMoreClick = this._handlerButtonShowMoreClick.bind(this);
    this._handlePopupChange = this._handlePopupChange.bind(this);
    this._handlerSortTypeChange = this._handlerSortTypeChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);

    this._filmsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._renderFilmsContainer();
    this._renderBoard();
  }

  _getFilms () {
    this._filterType = this._filterModel.getFilter();
    const films = this._filmsModel.getFilms().slice();
    const filteredFilms = filter[this._filterType](films);

    switch (this._currentSortType) {
      case SortType.BY_DATE:
        return filteredFilms
          .sort((prev, next) => dayjs(prev.filmInfo.release.date).diff(dayjs(next.filmInfo.release.date)));
      case SortType.BY_RATING:
        return filteredFilms
          .sort((prev, next) => next.filmInfo.totalRating - prev.filmInfo.totalRating);
    }
    return filteredFilms;
  }

  _getComments () {
    return this._commentsModel.getComments();
  }

  _renderSort () {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }
    this._sortComponent = new SortView(this._currentSortType);
    this._sortComponent.setSortTypeChangeHandler(this._handlerSortTypeChange);
    render(this._mainContainer, this._sortComponent, RenderPosition.INSERT_BEFORE, this._filmsComponent.getElement());
  }

  _handlerSortTypeChange (sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;
    remove(this._sortComponent);
    this._renderSort();
    this._clearFilms();
    this._renderFilmList();
  }

  _handlerButtonShowMoreClick () {
    const filmsCount = this._getFilms().length;
    const newRenderedFilmsCount = Math.min(filmsCount, this._renderedFilmCount + FILMS_QUANTITY_PER_STEP);
    const films = this._getFilms().slice(this._renderedFilmCount, newRenderedFilmsCount);

    this._renderFilms( this._filmsComponent.getElement().querySelector('.films-list__container'), films, this._mainFilmsPresenter);

    this._renderedFilmCount = newRenderedFilmsCount;

    if (this._renderedFilmCount >= filmsCount) {
      remove(this._buttonShowMoreComponent);
    }
  }

  _renderButtonShowMore () {
    if (this._buttonShowMoreComponent !== null) {
      this._buttonShowMoreComponent = null;
    }

    this._buttonShowMoreComponent = new ButtonShowMoreView();
    this._buttonShowMoreComponent.setClickHandler(this._handlerButtonShowMoreClick);
    render(this._filmListComponent, this._buttonShowMoreComponent, RenderPosition.BEFOREEND);
  }

  _renderFilmList () {
    this._filmListContainer = new FilmListContainerView();

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
    this._filmListContainer = new FilmListContainerView();
    const topRatedFilms = this._getFilms().slice().sort((prev, next) => next.filmInfo.totalRating - prev.filmInfo.totalRating).slice(0, MaxQuantityElement.FILMS_TOP_RATED);

    render(this._filmsComponent, this._topRatedListComponent, RenderPosition.BEFOREEND);
    render(this._topRatedListComponent, this._filmListContainer, RenderPosition.BEFOREEND);

    this._renderFilms(this._filmListContainer, topRatedFilms, this._topRatedFilmsPresenter);
  }

  _renderMostCommentedList () {
    this._filmListContainer = new FilmListContainerView();
    const mostCommentedFilms = this._getFilms().slice().sort((prev, next) => next.comments.length - prev.comments.length).slice(0, MaxQuantityElement.FILMS_MOST_COMMENT);

    render(this._filmsComponent, this._mostCommentedListComponent, RenderPosition.BEFOREEND);
    render(this._mostCommentedListComponent,this._filmListContainer , RenderPosition.BEFOREEND);

    this._renderFilms(this._filmListContainer, mostCommentedFilms, this._mostCommentedFilmsPresenter);
  }

  _renderNofilm () {
    if (this._noFilmComponent !== null) {
      this._noFilmComponent = null;
    }

    this._noFilmComponent = new NoFilmView(this._filterType);

    render(this._filmsComponent, this._noFilmComponent, RenderPosition.BEFOREEND);
  }

  _renderFilmsContainer () {
    render(this._mainContainer, this._filmsComponent, RenderPosition.BEFOREEND);
  }

  _renderFilm (container, film, comments, listType) {
    const filmPresenter = new FilmPresenter(container, this._handleViewAction, this._handlePopupChange);

    filmPresenter.init(film, comments);
    listType.set(film.id, filmPresenter);
  }

  _renderFilms (container, films, listType) {
    films
      .forEach((boardFilm) => {
        this._renderFilm(container, boardFilm, this._getComments(), listType);
      });
  }

  _clearFilms (resetSortType = false) {


    this._mainFilmsPresenter.forEach((film) => film.destroy());
    this._mainFilmsPresenter.clear();
    this._renderedFilmCount = FILMS_QUANTITY_PER_STEP;
    remove(this._buttonShowMoreComponent);
    this._filmListComponent.getElement().removeChild(this._filmListComponent.getElement().querySelector('.films-list__container'));

    if (resetSortType) {
      this._currentSortType = SortType.DEFAULT;
      remove(this._sortComponent);
      this._renderSort();
    }

  }

  _clearBoard (resetSortType = false) {
    this._mainFilmsPresenter.forEach((film) => film.destroy());
    this._mainFilmsPresenter.clear();
    this._topRatedFilmsPresenter.forEach((film) => film.destroy());
    this._topRatedFilmsPresenter.clear();
    this._mostCommentedFilmsPresenter.forEach((film) => film.destroy());
    this._mostCommentedFilmsPresenter.clear();
    this._renderedFilmCount = FILMS_QUANTITY_PER_STEP;
    remove(this._sortComponent);
    remove(this._filmsComponent);

    if (resetSortType) {
      this._currentSortType = SortType.DEFAULT;
    }
  }

  _renderBoard () {
    const filmsCount = this._getFilms().length;
    if (filmsCount === 0) {
      this._renderNofilm();
      return;
    }
    this._renderSort();
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
      case UserAction.UPDATE_FILM:
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
        this._clearFilms(true);
        this._renderFilmList();
        break;
      case UpdateType.MAJOR:
        this._clearBoard(true);

    }
  }

}
