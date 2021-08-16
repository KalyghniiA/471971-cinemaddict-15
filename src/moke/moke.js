import { formateDate, generateDate, generateDateRelease, generateDateToComment, getRandomFloat, getRandomIntInclusive } from '../utils/utils';

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

const COUNTRY = [
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

const GENRE = [
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
const MIN_RATING = 0;
const MAX_RATING = 10;
const PRECISION_RATING = 1;
const MIN_RUNTIME = 20;
const MAX_RUNTIME = 200;

const createDescription = () => DESCRIPTION.slice(0, getRandomIntInclusive(1, DESCRIPTION.length - 1)).join(' ');

export const createComment = () => ({
  'id': getRandomIntInclusive(0, MAX_COMMENT_QUANTITY),
  'author': NAMES[getRandomIntInclusive(0, NAMES.length - 1)],
  'comment': DESCRIPTION[getRandomIntInclusive(0, DESCRIPTION.length - 1)],
  'date': generateDateToComment(),
  'emotion': COMMENT_EMOTION[getRandomIntInclusive(0, COMMENT_EMOTION.length - 1)],
});


export const createMokeData = (comments) => {
  const commentsId = [];
  const wrinters = new Set;
  const actors = new Set;
  const genre = new Set;

  Array.isArray(comments) ?
    comments.forEach((comment) => {
      commentsId.push(comment.id);
    }) :
    commentsId.push(comments.id);


  for (let i = 0; i < getRandomIntInclusive(1, NAMES.length - 1); i++) {
    actors.add(NAMES[getRandomIntInclusive(0, NAMES.length - 1)]);
  }

  for (let i = 0; i < getRandomIntInclusive(1, NAMES.length - 1); i++) {
    wrinters.add(NAMES[getRandomIntInclusive(0, NAMES.length - 1)]);
  }

  for (let i = 0; i < getRandomIntInclusive(1, GENRE.length - 1); i++) {
    genre.add(GENRE[getRandomIntInclusive(0, GENRE.length - 1)]);
  }


  return {
    'id': '0',
    'comments': commentsId,
    'film_info': {
      'title': FILMS[getRandomIntInclusive(0, FILMS.length - 1)],
      'alternative_title': FILMS[getRandomIntInclusive(0, FILMS.length - 1)],
      'total_rating': getRandomFloat(MIN_RATING, MAX_RATING, PRECISION_RATING),
      'poster': POSTERS[getRandomIntInclusive(0, POSTERS.length - 1)],
      'age_rating': AGE_RATING[getRandomIntInclusive(0, AGE_RATING.length - 1)],
      'director': NAMES[getRandomIntInclusive(0, NAMES.length - 1)],
      'wrinters': [...wrinters],
      'actors': [...actors],
      'release': {
        'date': formateDate(generateDateRelease()),
        'release_country': COUNTRY[getRandomIntInclusive(0, COUNTRY.length - 1)],
      },
      'runtime': getRandomIntInclusive(MIN_RUNTIME, MAX_RUNTIME),
      'genre': [...genre],
      'description': createDescription(),
    },
    'user_details': {
      'watchlist': Boolean(getRandomIntInclusive()),
      'already_watched': Boolean(getRandomIntInclusive()),
      'watchng_date': formateDate(generateDate()),
      'favorite': Boolean(getRandomIntInclusive()),
    },

  };
};
