import {formatDate, getTimeFromMinutes } from '../utils/date';

import Smart from './smart';


const createPopupFilm = (film, commentsFilm) => {
  const {
    filmInfo: {
      poster,
      ageRating,
      title,
      alternativeTitle,
      totalRating,
      director,
      writers,
      actors,
      runtime,
      genre,
      description,
      release: {
        date,
        releaseCountry,
      },
    },
    userDetails: {
      watchlist,
      alreadyWatched,
      favorite,
    },
    isEmojiActive,
    isEmojiType,
  } = film;


  const renderGenre = (genres) => {
    let genreElement = '';

    for (let i = 0; i < genres.length; i++) {
      genreElement += `<span class="film-details__genre">${genre[i]}</span>`;
    }

    return genreElement;
  };

  const renderComments = (comments) => {
    let commentsElement = '';

    for (let i = 0; i < comments.length; i++) {
      const {
        author,
        comment,
        date: dateComments,
        emotion,
      } = comments[i];

      commentsElement += `
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
            </span>
            <div>
              <p class="film-details__comment-text">${comment}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${author}</span>
                <span class="film-details__comment-day">${formatDate(dateComments, 'D')} days ago</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
          `;
    }

    return commentsElement;
  };

  return (`<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">

          <p class="film-details__age">${ageRating}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${alternativeTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${totalRating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers.join(', ')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors.join(', ')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${formatDate(date, 'DD MMMM YYYY')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${getTimeFromMinutes(runtime)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${releaseCountry}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                ${renderGenre(genre)}</td>
            </tr>
          </table>

          <p class="film-details__film-description">
            ${description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <button type="button" class="film-details__control-button film-details__control-button--watchlist ${watchlist ? 'film-details__control-button--active' : ''}" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="film-details__control-button film-details__control-button--watched ${alreadyWatched ? 'film-details__control-button--active' : ''}" id="watched" name="watched">Already watched</button>
        <button type="button" class="film-details__control-button film-details__control-button--favorite ${favorite ? 'film-details__control-button--active' : ''}" id="favorite" name="favorite">Add to favorites</button>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsFilm.length}</span></h3>

        <ul class="film-details__comments-list">
          ${renderComments(commentsFilm)}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label">
          ${isEmojiActive ?
      `<img src="./images/emoji/${isEmojiType}.png" width="55" height="55" alt="emoji-smile">` :
      ''}
          </div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" ${isEmojiType === 'smile'? 'checked' : ''}>
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping" ${isEmojiType === 'sleeping'? 'checked' : ''}>
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke" ${isEmojiType === 'puke'? 'checked' : ''}>
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry" ${isEmojiType === 'angry'? 'checked' : ''}>
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`
  );
};

export default class Popup extends Smart {
  constructor (film, comments) {
    super();
    this._data = Popup.parseFilmToData(film);
    this._comments = comments;

    this._closeClickHandler = this._closeClickHandler.bind(this);
    this._controlAddToWatchlistClick = this._controlAddToWatchlistClick.bind(this);
    this._controlMarkAsWatchedClick = this._controlMarkAsWatchedClick.bind(this);
    this._controlFavoriteClick = this._controlFavoriteClick.bind(this);
    this._controlEmojiClickHandler = this._controlEmojiClickHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate () {
    return createPopupFilm(this._data, this._comments);
  }

  _setInnerHandlers () {
    this
      .getElement()
      .addEventListener('click', this._controlEmojiClickHandler);
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setCloseClickHandler(this._callback.closeClick);
    this.setControlFavoriteClick(this._callback.controlFavoriteClick);
    this.setControlMarkAsWatchedClick(this._callback.controlMarkAsWatchedClick);
    this.setControlAddToWatchListHandler(this._callback.controlAddToWatchListClick);
  }

  _closeClickHandler () {
    this._callback.closeClick();
  }

  _controlAddToWatchlistClick (evt) {
    evt.preventDefault();
    this._callback.controlAddToWatchListClick();
  }

  _controlMarkAsWatchedClick (evt) {
    evt.preventDefault();
    this._callback.controlMarkAsWatchedClick();
  }

  _controlFavoriteClick (evt) {
    evt.preventDefault();
    this._callback.controlFavoriteClick();
  }

  _controlEmojiClickHandler (evt) {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    this.updateData({
      isEmojiActive: true,
      isEmojiType: evt.target.value,
      scrollTop: this.getElement().scrollTop,
    });
  }

  setCloseClickHandler (callback) {
    this._callback.closeClick = callback;
    this.getElement().querySelector('.film-details__close-btn').addEventListener('click', this._closeClickHandler);
  }

  setControlAddToWatchListHandler (callback) {
    this._callback.controlAddToWatchListClick = callback;
    this
      .getElement()
      .querySelector('.film-details__control-button--watchlist')
      .addEventListener('click', this._controlAddToWatchlistClick);
  }

  setControlMarkAsWatchedClick (callback) {
    this._callback.controlMarkAsWatchedClick = callback;
    this
      .getElement()
      .querySelector('.film-details__control-button--watched')
      .addEventListener('click', this._controlMarkAsWatchedClick);
  }

  setControlFavoriteClick (callback) {
    this._callback.controlFavoriteClick = callback;
    this
      .getElement()
      .querySelector('.film-details__control-button--favorite')
      .addEventListener('click', this._controlFavoriteClick);
  }

  static parseFilmToData (film) {
    return Object.assign(
      {},
      film,
      {
        isEmojiActive: null,
        isEmojiType: null,
        scrollTop: null,
      },
    );
  }

  static parseDataToFilm (data) {
    data = Object.assign({}, data);

    delete data.isEmojiActive;
    delete data.isEmojiType;
    delete data.scrollTop;
    return data;
  }

}
