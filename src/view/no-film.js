import AbstractView from './abstract';
import {FilterType} from '../const';

const NoFilmsTextType = {
  [FilterType.ALL]: 'There are no movies in our database',
  [FilterType.WATCHLIST]: 'There are no movies to watch now',
  [FilterType.HISTORY]: 'There are no watched movies now',
  [FilterType.FAVORITES]: 'There are no favorite movies now',
};

const createNoFilmsTemplate = (filterType) => {
  const noFilmTextValue = NoFilmsTextType[filterType];

  return (
    `<section class="films-list">
        <h2 class="films-list__title">${noFilmTextValue}</h2>
        </section>`
  );
};

export default class NoFilm extends AbstractView {
  constructor(filterType) {
    super();
    this._filterType = filterType;
  }

  getTemplate () {
    return createNoFilmsTemplate(this._filterType);
  }
}
