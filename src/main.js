import { createComment, createMokeData } from './moke/moke';
import { render } from './utils/utils';
import { createButtonShowMore } from './view/button-show-more';
import { createFilmCardElement } from './view/film-card';
import { FILMS_QUANTITY_PER_STEP } from './view/film-list';
import { createFilmsElement } from './view/films';
import { createStatisticsElement } from './view/footer-statistics';
import { createNavigationElement } from './view/navigation';
import { createProfileElement } from './view/profile';
import { createSortElement } from './view/sort';

const MAX_COMMENT_QUANTITY = 5;
const MAX_MOKE_QUANTITY = 20;
const commentsData = [];
const mokeData = [];

for (let i = 0; i < MAX_COMMENT_QUANTITY; i++) {
  commentsData.push(createComment());
}

for (let i = 0; i < MAX_MOKE_QUANTITY; i++) {
  mokeData.push(createMokeData(commentsData));
}

const topRatedFilms = mokeData.slice().sort((prev, next) => next.film_info.total_rating - prev.film_info.total_rating);
const mostCommentedFilms = mokeData.slice().sort((prev, next) => next.comments.length - prev.comments.length);

const navigationInfo = {
  'watchlist': mokeData.filter(({user_details: {watchlist}}) => watchlist).length,
  'history': mokeData.filter(({user_details: {already_watched:watched}}) => watched).length,
  'favorites': mokeData.filter(({user_details: {favorite}}) => favorite).length,
};


const headerContainer = document.querySelector('.header');
const mainContainer = document.querySelector('.main');
const statisticsContainer = document.querySelector('.footer__statistics');

render(headerContainer, createProfileElement(), 'beforeend');
render(mainContainer, createNavigationElement(navigationInfo), 'beforeend');
render(mainContainer, createSortElement(),'beforeend');
render(mainContainer, createFilmsElement(mokeData, topRatedFilms, mostCommentedFilms),'beforeend');
render(statisticsContainer, createStatisticsElement(), 'beforeend');

if(mokeData.length > FILMS_QUANTITY_PER_STEP) {
  const filmsListContainer = document.querySelector('.films-list:first-child .films-list__container');
  const filmsMainContainer = document.querySelector('.films-list:first-child');
  let renderedFilmCount = FILMS_QUANTITY_PER_STEP;

  render(filmsMainContainer, createButtonShowMore(), 'beforeend');

  const buttonShowMore = document.querySelector('.films-list__show-more');

  buttonShowMore.addEventListener('click', (evt) => {
    evt.preventDefault();

    for (let i = renderedFilmCount; i < renderedFilmCount + FILMS_QUANTITY_PER_STEP; i++) {
      render(filmsListContainer, createFilmCardElement(mokeData[i]), 'beforeend');
    }

    renderedFilmCount +=FILMS_QUANTITY_PER_STEP;
    if (renderedFilmCount >= mokeData.length) {
      buttonShowMore.remove();
    }
  });

}
