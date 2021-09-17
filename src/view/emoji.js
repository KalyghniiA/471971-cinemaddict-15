import Abstract from './abstract';

const createEmojiElement = (emojiType) => {
  return ``;
};

export default class Emoji extends Abstract {
  constructor(type) {
    super();
    this._type = type;
  }

  getTemplate () {
    return createEmojiElement(this._type);
  }
}
