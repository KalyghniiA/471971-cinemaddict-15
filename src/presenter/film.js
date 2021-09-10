import { remove, render, RenderPosition } from '../utils/render';
import FilmCard from '../view/film-card';
import Popup from '../view/popup';

export default class Film {
  constructor(container, changeData) {
    this._container = container;
    this._filmComponent = null;
    this._popupComponent = null;
    this._changeData = changeData;

    this._handleOpenClick = this._handleOpenClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._onEscKeyDownHandler = this._onEscKeyDownHandler.bind(this);
    this._handleAddToWatchListClick = this._handleAddToWatchListClick.bind(this);
  }

  init (film, comments) {
    this._film = film;
    this._comments = comments;

    const prevFilmComponent = this._filmComponent;
    const prevPopupComponent = this._popupComponent;

    this._filmComponent = new FilmCard(this._film);
    this._popupComponent = new Popup(this._film, this._comments);


    this._filmComponent.setOpenClickHandler(this._handleOpenClick);
    this._popupComponent.setCloseClickHandler(this._handleCloseClick);
    this._filmComponent.setControlAddToWatchListHandler(this._handleAddToWatchListClick);
    this._popupComponent.setControlAddToWatchListHandler(this._handleAddToWatchListClick);


    if (prevFilmComponent === null || prevPopupComponent === null) {
      render(this._container, this._filmComponent, RenderPosition.BEFOREEND);
      /* return; */
    }

    /* remove(prevFilmComponent);
    remove(prevPopupComponent); */
  }

  destroy() {
    remove(this._filmComponent);
    remove(this._popupComponent);
  }

  _openPopupHandler () {
    render(document.body, this._popupComponent, RenderPosition.BEFOREEND);
    document.body.classList.add('hide-overflow');
    document.addEventListener('keydown', this._onEscKeyDownHandler);
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
          )
        },
      ),
    );
  }
}
