import { createComments, createMocksData} from './mock/mock';
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
const MAX_MOCK_QUANTITY = 20;
const commentsData = [];
const mockData = [];

createComments(commentsData, MAX_COMMENT_QUANTITY);
createMocksData(mockData, MAX_MOCK_QUANTITY, commentsData);

const topRatedFilms = mockData.slice().sort((prev, next) => next.filmInfo.totalRating - prev.filmInfo.totalRating);
const mostCommentedFilms = mockData.slice().sort((prev, next) => next.comments.length - prev.comments.length);

const navigationInfo = {
  'watchlist': mockData.filter(({userDetails: {watchlist}}) => watchlist).length,
  'history': mockData.filter(({userDetails: {alreadyWatched:watched}}) => watched).length,
  'favorites': mockData.filter(({userDetails: {favorite}}) => favorite).length,
};


const headerContainer = document.querySelector('.header');
const mainContainer = document.querySelector('.main');
const statisticsContainer = document.querySelector('.footer__statistics');

render(headerContainer, createProfileElement(), 'beforeend');
render(mainContainer, createNavigationElement(navigationInfo), 'beforeend');
render(mainContainer, createSortElement(),'beforeend');
render(mainContainer, createFilmsElement(mockData, topRatedFilms, mostCommentedFilms),'beforeend');
render(statisticsContainer, createStatisticsElement(mockData), 'beforeend');

if(mockData.length > FILMS_QUANTITY_PER_STEP) {
  const filmsListContainer = document.querySelector('.films-list:first-child .films-list__container');
  const filmsMainContainer = document.querySelector('.films-list:first-child');
  let renderedFilmCount = FILMS_QUANTITY_PER_STEP;

  render(filmsMainContainer, createButtonShowMore(), 'beforeend');

  const buttonShowMore = document.querySelector('.films-list__show-more');

  buttonShowMore.addEventListener('click', (evt) => {
    evt.preventDefault();

    for (let i = renderedFilmCount; i < renderedFilmCount + FILMS_QUANTITY_PER_STEP; i++) {
      render(filmsListContainer, createFilmCardElement(mockData[i]), 'beforeend');
    }

    renderedFilmCount += FILMS_QUANTITY_PER_STEP;
    if (renderedFilmCount >= mockData.length) {
      buttonShowMore.remove();
    }
  });

}
