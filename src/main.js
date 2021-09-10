import { createComments, createMocksData} from './mock/mock';
import ProfileView from './view/profile';
import NavigationView from './view/navigation';
import StatisticView from './view/footer-statistics';
import { render, RenderPosition } from './utils/render';
import Board from './presenter/board';
import { MaxQuantityElement } from './const';

const commentsData = createComments(MaxQuantityElement.COMMENT);
const mockData = createMocksData(MaxQuantityElement.MOCK, commentsData);


const navigationInfo = {
  'watchlist': mockData.filter(({userDetails: {watchlist}}) => watchlist).length,
  'history': mockData.filter(({userDetails: {alreadyWatched:watched}}) => watched).length,
  'favorites': mockData.filter(({userDetails: {favorite}}) => favorite).length,
};


const headerContainer = document.querySelector('.header');
const mainContainer = document.querySelector('.main');
const statisticsContainer = document.querySelector('.footer__statistics');

render(headerContainer, new ProfileView(), RenderPosition.BEFOREEND);
render(mainContainer, new NavigationView(navigationInfo), RenderPosition.BEFOREEND);


const films = new Board(mainContainer);

films.init(mockData, commentsData);

render(statisticsContainer, new StatisticView(mockData), RenderPosition.BEFOREEND);
