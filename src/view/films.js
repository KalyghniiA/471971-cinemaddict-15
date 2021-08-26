import { createElement } from '../utils/utils';


const createFilmsElement = () => (
  `<section class="films">
        
      </section>`
);

export default class Films {
  constructor () {
    this._element = null;
  }

  getTemplate () {
    return createFilmsElement();
  }

  getElement () {
    if(!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}
