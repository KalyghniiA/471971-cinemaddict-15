
import { createFilmCardElement } from './film-card';

export const FILMS_QUANTITY_PER_STEP = 5;

export const createFilmListElement = (data) => {

  const renderMainFilms = (films) => {
    let filmsElement = '';

    for ( let i = 0; i < FILMS_QUANTITY_PER_STEP; i++) {
      filmsElement += createFilmCardElement(films[i]);
    }
    return filmsElement;
  };


  return (
    `
        <section class="films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>  
          <div class="films-list__container">
            ${renderMainFilms(data)}
          </div>
        </section>`
  );

};
