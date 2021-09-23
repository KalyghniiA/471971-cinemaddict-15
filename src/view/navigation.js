import AbstractView from './abstract';

const createNavigationElement = (info, currentFilterType) => {
  const {type, name, count} = info;
  return (
    `<a
        href="#${type}"
        class="main-navigation__item ${type === currentFilterType? 'main-navigation__item--active': ''}"
        data-filter-type=${type}>
        ${name}
        ${type !== 'all'?
      `<span class="main-navigation__item-count">
          ${count}
          </span>` : ''}
        </a>`
  );
};

const createNavigationElements = (filters, currentFilterType) => {
  const filterItemsTemplate = filters
    .map((filter) => createNavigationElement(filter, currentFilterType))
    .join('');

  return (`<nav class="main-navigation">
    <div class="main-navigation__items">
        ${filterItemsTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`);
};


export default class Navigation extends AbstractView {
  constructor (filters, currentFilterType) {
    super();
    this._filters = filters;
    this._currentFilterType = currentFilterType;

    this._filterTypeClickHandler = this._filterTypeClickHandler.bind(this);
  }

  getTemplate () {
    return createNavigationElements(this._filters, this._currentFilterType);
  }

  _filterTypeClickHandler (evt) {
    if (evt.target.tagName !== 'A') {
      return;
    }

    evt.preventDefault();
    this._callback.filterTypeClick(evt.target.dataset.filterType);
  }

  setFilterTypeClickHandler (callback) {
    this._callback.filterTypeClick = callback;
    this
      .getElement()
      .addEventListener('click', this._filterTypeClickHandler);

  }

}
