import Abstract from './abstract';

export default class Smart extends Abstract {
  constructor() {
    super();
    this._dataFilm = {};
  }

  updateData (update, justDataUpdating) {
    if (!update) {
      return;
    }


    this._dataFilm = Object.assign(
      {},
      this._dataFilm,
      update,
    );

    if (justDataUpdating) {
      return;
    }

    this.updateElement();
  }

  updateElement () {
    const prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();
    const newElement = this.getElement();


    parent.replaceChild(newElement, prevElement);
    newElement.scrollTop = this._dataFilm.scrollTop;
    this.restoreHandlers();
  }

  restoreHandlers () {
    throw new Error('Abstract method not implemented: resetHandlers');
  }
}
