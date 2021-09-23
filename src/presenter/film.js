import { remove, render, RenderPosition, replace } from '../utils/render';
import FilmCard from '../view/film-card';
import Popup from '../view/popup';
import {UpdateType, UserAction} from '../const';

const Mode = {
  DEFAULT: 'DEFAULT',
  OPENED: 'OPENED',
};

export default class Film {
  constructor(container, changeData, changeMode) {
    this._container = container;
    this._filmComponent = null;
    this._popupComponent = null;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._mode = Mode.DEFAULT;

    this._handleOpenClick = this._handleOpenClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._onEscKeyDownHandler = this._onEscKeyDownHandler.bind(this);
    this._handleAddToWatchListClick = this._handleAddToWatchListClick.bind(this);
    this._handleMarkAsWatchedClick = this._handleMarkAsWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init (film, comments) {
    this._film = film;
    this._comments = comments;

    const prevFilmComponent = this._filmComponent;
    const prevPopupComponent = this._popupComponent;

    this._filmComponent = new FilmCard(this._film);
    this._popupComponent = new Popup(this._film, this._comments);

    this._filmComponent.setOpenClickHandler(this._handleOpenClick);
    this._filmComponent.setControlFavoriteClick(this._handleFavoriteClick);
    this._filmComponent.setControlAddToWatchListHandler(this._handleAddToWatchListClick);
    this._filmComponent.setControlMarkAsWatchedClick(this._handleMarkAsWatchedClick);
    this._setPopupHandlers();
    if (prevFilmComponent === null || prevPopupComponent === null) {
      render(this._container, this._filmComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._container.getElement().contains(prevFilmComponent.getElement())) {
      replace(this._filmComponent, prevFilmComponent);
    }

    if (document.body.contains(prevPopupComponent.getElement())) {
      replace(this._popupComponent, prevPopupComponent);
    }


    remove(prevFilmComponent);
    remove(prevPopupComponent);
  }

  destroy() {
    remove(this._filmComponent);
    remove(this._popupComponent);
  }

  resetView () {
    if(this._mode !== Mode.DEFAULT) {
      this._removePopupHandler();
    }
  }

  _setPopupHandlers () {
    this._popupComponent.setCloseClickHandler(this._handleCloseClick);
    this._popupComponent.setControlAddToWatchListHandler(this._handleAddToWatchListClick);
    this._popupComponent.setControlMarkAsWatchedClick(this._handleMarkAsWatchedClick);
    this._popupComponent.setControlFavoriteClick(this._handleFavoriteClick);
  }

  _openPopupHandler () {
    this._changeMode();
    render(document.body, this._popupComponent, RenderPosition.BEFOREEND);
    this._setPopupHandlers();
    document.body.classList.add('hide-overflow');
    document.addEventListener('keydown', this._onEscKeyDownHandler);
    this._mode = Mode.OPENED;
  }

  _removePopupHandler () {
    remove(this._popupComponent);
    document.body.classList.remove('hide-overflow');
    document.removeEventListener('keydown', this._onEscKeyDownHandler);
  }

  _onEscKeyDownHandler (evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this._removePopupHandler();
      document.removeEventListener('keydown', this._onEscKeyDownHandler);
    }
  }

  _handleOpenClick () {
    this._openPopupHandler();
  }

  _handleCloseClick () {
    this._removePopupHandler();
  }

  _handleAddToWatchListClick () {
    this._changeData(
      UserAction.UPDATE_FILM,
      UpdateType.PATCH,
      Object.assign(
        {},
        this._film,
        {
          userDetails: Object.assign(
            {},
            this._film.userDetails,
            {
              watchlist: !this._film.userDetails.watchlist,
            },
          ),
        },
      ),
    );
  }

  _handleMarkAsWatchedClick () {
    this._changeData(
      UserAction.UPDATE_FILM,
      UpdateType.PATCH,
      Object.assign(
        {},
        this._film,
        {
          userDetails: Object.assign(
            {},
            this._film.userDetails,
            {
              alreadyWatched: !this._film.userDetails.alreadyWatched,
            },
          ),
        },
      ),
    );
  }

  _handleFavoriteClick () {
    this._changeData(
      UserAction.UPDATE_FILM,
      UpdateType.PATCH,
      Object.assign(
        {},
        this._film,
        {
          userDetails: Object.assign(
            {},
            this._film.userDetails,
            {
              favorite: !this._film.userDetails.favorite,
            },
          ),
        },
      ),
    );
  }
}
