import AbstractView from './abstract';

const createNavigationElement = (info) => {
  const {watchlist, history, favorites} = info;
  return (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorites}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export default class Navigation extends AbstractView {
  constructor (info) {
    super();
    this._info = info;
  }

  getTemplate () {
    return createNavigationElement(this._info);
  }
}
