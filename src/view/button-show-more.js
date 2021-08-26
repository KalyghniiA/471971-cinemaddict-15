import { createElement } from '../utils/utils';


const createButtonShowMore = () => (
  '<button class="films-list__show-more">Show more</button>'
);

export default class ButtonShowMore {
  constructor () {
    this._element = null;
  }

  getTemplate() {
    return createButtonShowMore();
  }

  getElement() {
    if(!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

