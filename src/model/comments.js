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

}
