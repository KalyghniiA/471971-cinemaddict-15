import AbstractObserver from '../utils/abstract-observer';

export default class Comments extends AbstractObserver {
  constructor(props) {
    super(props);
    this._comments = [];
  }

  setComments (comments) {
    this._comments = comments.slice();
  }

  getComments () {
    return this._comments;
  }

  addComments (updateType, update) {
    this._comments = [
      ...this._comments,
      update,
    ];

    this._notify(updateType, update);
  }


  deleteComments (updateType, update) {
    const index = this._comments.findIndex((item) => item.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting comments');
    }

    this._comments = [
      ...this._comments.slice(0, index),
      ...this._comments.slice(index + 1),
    ];

    this._notify(updateType, update);
  }
}
