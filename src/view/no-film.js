import { createElement } from '../utils/utils';

export default class NoFilm {
  constructor () {
    this._element = null;
  }

  getTemplate () {
    return `<section class="films-list">
    <h2 class="films-list__title">Loading...</h2>
    </section>`;
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
