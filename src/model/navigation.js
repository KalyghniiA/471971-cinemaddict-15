import AbstractObserver from '../utils/abstract-observer';
import {FilterType} from '../const';

export default class Navigation extends AbstractObserver {
  constructor() {
    super();
    this._activeFilter = FilterType.ALL;
  }

  setFilter (updateType, filter) {
    this._activeFilter = filter;
    this._notify(updateType, filter);
  }

  getFilter () {
    return this._activeFilter;
  }

}
