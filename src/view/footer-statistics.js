import AbstractView from './abstract';

const createStatisticsElement = (movies) => (
  `<p>${movies.length} movies inside</p>`
);


export default class Statistic extends AbstractView {
  constructor (movies) {
    super();
    this._movies = movies;
  }

  getTemplate () {
    return createStatisticsElement(this._movies);
  }
}
