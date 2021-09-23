import { createComments, createMocksData} from './mock/mock';
import ProfileView from './view/profile';
import StatisticView from './view/footer-statistics';
import { render, RenderPosition } from './utils/render';
import BoardPresenter from './presenter/board';
import { MaxQuantityElement } from './const';
import FilmsModel from './model/films';
import CommentsModel from './model/comments';
import NavigationModel from './model/navigation';
import NavigationPresenter from './presenter/navigation';

const commentsData = createComments(MaxQuantityElement.COMMENT);
const mockData = createMocksData(MaxQuantityElement.MOCK, commentsData);



const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel();
filmsModel.setFilms(mockData);
commentsModel.setComments(commentsData);
const filterModel = new NavigationModel();

const headerContainer = document.querySelector('.header');
const mainContainer = document.querySelector('.main');
const statisticsContainer = document.querySelector('.footer__statistics');

render(headerContainer, new ProfileView(), RenderPosition.BEFOREEND);


const films = new BoardPresenter(mainContainer, filmsModel, commentsModel, filterModel);
const navigation = new NavigationPresenter(mainContainer, filmsModel, filterModel);
navigation.init();
films.init();

render(statisticsContainer, new StatisticView(mockData), RenderPosition.BEFOREEND);
