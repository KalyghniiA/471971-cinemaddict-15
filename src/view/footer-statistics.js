import { createElement } from '../utils/utils';

const createStatisticsElement = (movies) => (
  `<p>${movies.length} movies inside</p>`
);


export default class Statistic {
  constructor (movies) {
    this._element = null;
    this._movies = movies;
  }

  getTemplate () {
    return createStatisticsElement(this._movies);
  }

  getElement () {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}
