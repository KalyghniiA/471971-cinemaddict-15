import {FilterType} from '../const';

export const filter = {
  [FilterType.ALL]: (films) => films,
  [FilterType.WATCHLIST]: (films) => films.filter(({userDetails: {watchlist}}) => watchlist),
  [FilterType.HISTORY]: (films) => films.filter(({userDetails: {alreadyWatched:watched}}) => watched),
  [FilterType.FAVORITES]: (films) => films.filter(({userDetails: {favorite}}) => favorite),
};
