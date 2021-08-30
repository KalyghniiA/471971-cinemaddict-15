import { createComments, createMocksData} from './mock/mock';
import ProfileView from './view/profile';
import NavigationView from './view/navigation';
import SortView from './view/sort';
import FilmsView from './view/films';
import FilmListView from './view/film-list';
import TopRatedListView from './view/top-rated-film-list';
import MostCommentedListView from './view/most_comment_film_list';
import FilmCardView from './view/film-card';
import StatisticView from './view/footer-statistics';
import ButtonShowMoreView from './view/button-show-more';
import PopupView from './view/popup';
import NoFilmView from './view/no-film';
import { remove, render, RenderPosition } from './utils/render';

const FILMS_QUANTITY_PER_STEP = 5;


const MaxQuantityElement = {
  COMMENT: 5,
  MOCK: 20,
  FILMS_TOP_RATED: 2,
  FILMS_MOST_COMMENT: 2,
};

const commentsData = createComments(MaxQuantityElement.COMMENT);
const mockData = createMocksData(MaxQuantityElement.MOCK, commentsData);


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

render(headerContainer, new ProfileView(), RenderPosition.BEFOREEND);
render(mainContainer, new NavigationView(navigationInfo), RenderPosition.BEFOREEND);
render(mainContainer, new SortView(), RenderPosition.BEFOREEND);
render(mainContainer, new FilmsView(), RenderPosition.BEFOREEND);

const filmsContainer = document.querySelector('.films');


if (mockData.length === 0) {
  render(filmsContainer, new NoFilmView(), RenderPosition.BEFOREEND);
} else {
  render(filmsContainer, new FilmListView(), RenderPosition.BEFOREEND);
  render(filmsContainer, new TopRatedListView(), RenderPosition.BEFOREEND);
  render(filmsContainer, new MostCommentedListView(), RenderPosition.BEFOREEND);

  const filmListContainer =  filmsContainer.querySelector('.films-list:first-child .films-list__container');
  const topRatedListContainer = filmsContainer.querySelector('.films-list--top-rated .films-list__container');
  const mostCommentedListContainer = filmsContainer.querySelector('.films-list--most-commented .films-list__container');

  const renderFilms = (filmListElement, film, comments) => {
    const filmComponent = new FilmCardView(film);
    const popupComponent = new PopupView(film, comments);

    const openPopup = () => {
      render(document.body, popupComponent, RenderPosition.BEFOREEND);
      document.body.classList.add('hide-overflow');
    };

    const removePopup = () => {
      remove(popupComponent);
      document.body.classList.remove('hide-overflow');
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        removePopup();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    filmComponent.setOpenClickHandler(() => {
      openPopup();
      document.addEventListener('keydown', onEscKeyDown);
    });


    popupComponent.setCloseClickHandler(() => {
      removePopup();
    });

    render(filmListElement, filmComponent, RenderPosition.BEFOREEND);
  };

  for ( let i = 0; i < FILMS_QUANTITY_PER_STEP; i++) {
    renderFilms(filmListContainer, mockData[i], commentsData);
  }


  for (let i = 0; i < MaxQuantityElement.FILMS_TOP_RATED; i++) {
    renderFilms(topRatedListContainer, topRatedFilms[i], commentsData);
  }

  for (let i = 0; i < MaxQuantityElement.FILMS_MOST_COMMENT; i++) {
    renderFilms(mostCommentedListContainer, mostCommentedFilms[i], commentsData);
  }

  if (mockData.length > FILMS_QUANTITY_PER_STEP) {
    const filmsMainContainer = document.querySelector('.films-list:first-child');
    let renderedFilmCount = FILMS_QUANTITY_PER_STEP;
    const buttonShowMore = new ButtonShowMoreView();
    render(filmsMainContainer, buttonShowMore, RenderPosition.BEFOREEND);

    buttonShowMore.setClickHandler(() => {

      for (let i = renderedFilmCount; i < renderedFilmCount + FILMS_QUANTITY_PER_STEP; i++) {
        renderFilms(filmListContainer,mockData[i], commentsData);
      }

      renderedFilmCount += FILMS_QUANTITY_PER_STEP;
      if (renderedFilmCount >= mockData.length) {
        remove(buttonShowMore);
      }
    });
  }

}

render(statisticsContainer, new StatisticView(mockData), RenderPosition.BEFOREEND);
