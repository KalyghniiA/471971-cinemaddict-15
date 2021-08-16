import { createFilmListElement } from './film-list';
import { createMostCommentsListFilms } from './most_comment_film_list';
import { createTopRatedFilmList } from './top-rated-film-list';

export const createFilmsElement = (films, topRatedFilms, mostCommentedFilms) => (
  `<section class="films">
        ${createFilmListElement(films)}
        ${createTopRatedFilmList(topRatedFilms)}
        ${createMostCommentsListFilms(mostCommentedFilms)}
      </section>`
);
