
import { formateDate, generateDate, generateDateRelease, generateDateToComment, getRandomElementFromArray, getRandomFloat, getRandomIntInclusive } from '../utils/utils';

const FILMS = [
  'The Dance of Life',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor',
  'The Man with the Golden Arm',
  'The Great Flamarion',
  'Santa Claus Conquers the Martians',
  'Made for Each Other',
];

const POSTERS = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const COMMENT_EMOTION = [
  'smile',
  'sleeping',
  'puke',
  'angry',
];

const NAMES = [
  'Ralph "Skid" Johnson',
  'Bonny Lee King (Carroll)',
  'John Brant',
  'Frankie Machine',
  'Frank Sinatra',
  'The Martians Momar',
  'Mom Martian',
  'King Martian',
  'Girl Martian',
  'Boy Martin',
  'Sindbad the Sailor',
  'John Mason',
  'James Stewart',
];

const COUNTRIES = [
  'Estonia',
  'Finland',
  'Ireland',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Costa Rica',
  'China',
  'Congo',
  'Egypt',
];

const GENRES = [
  'feature film',
  'short film',
  'action',
  'adventure',
  'comedy',
  'drama',
  'crime',
  'horror',
  'fantasy',
];

const AGE_RATING = [
  0,
  6,
  12,
  16,
  18,
];

const MAX_COMMENT_QUANTITY = 50;

const RATING = {
  min: 0,
  max: 10,
  precision:1,
};

const RUNTIME = {
  min: 20,
  max: 200,
};

const ID = {
  min: 0,
  max: 100,
}

const createDescription = () => DESCRIPTION.slice(0, getRandomIntInclusive(1, DESCRIPTION.length - 1)).join(' ');

export const createComment = () => ({
  id: getRandomIntInclusive(0, MAX_COMMENT_QUANTITY),
  author: getRandomElementFromArray(NAMES),
  comment: getRandomElementFromArray(DESCRIPTION),
  date: generateDateToComment(),
  emotion: getRandomElementFromArray(COMMENT_EMOTION),
});


export const createMockData = (comments) => {
  const commentsId = [];
  const wrinters = new Set;
  const actors = new Set;
  const genre = new Set;


  comments.forEach((comment) => {
    commentsId.push(comment.id);
  });


  for (let i = 0; i < getRandomIntInclusive(1, NAMES.length - 1); i++) {
    actors.add(getRandomElementFromArray(NAMES));
  }

  for (let i = 0; i < getRandomIntInclusive(1, NAMES.length - 1); i++) {
    wrinters.add(getRandomElementFromArray(NAMES));
  }

  for (let i = 0; i < getRandomIntInclusive(1, GENRES.length - 1); i++) {
    genre.add(getRandomElementFromArray(GENRES));
  }


  return {
    id: String(getRandomIntInclusive(ID.min, ID.max)),
    comments: commentsId,
    filmInfo: {
      title: getRandomElementFromArray(FILMS),
      alternativeTitle: getRandomElementFromArray(FILMS),
      totalRating: getRandomFloat(RATING.min, RATING.max, RATING.precision),
      poster: getRandomElementFromArray(POSTERS),
      ageRating: getRandomElementFromArray(AGE_RATING),
      director: getRandomElementFromArray(NAMES),
      wrinters: [...wrinters],
      actors: [...actors],
      release: {
        date: formateDate(generateDateRelease()),
        releaseCountry: getRandomElementFromArray(COUNTRIES),
      },
      runtime: getRandomIntInclusive(RUNTIME.min, RUNTIME.max),
      genre: [...genre],
      description: createDescription(),
    },
    userDetails: {
      watchlist: Boolean(getRandomIntInclusive()),
      alreadyWatched: Boolean(getRandomIntInclusive()),
      watchngDate: formateDate(generateDate()),
      favorite: Boolean(getRandomIntInclusive()),
    },

  };
};

export const createComments = (container, quantity) => {
  for (let i = 0; i < quantity; i++) {
    container.push(createComment());
  }
};
export const createMocksData = (container, quantity, comments) => {
  for (let i = 0; i < quantity; i++) {
    container.push(createMockData(comments));
  }
};