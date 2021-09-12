import AbstractView from './abstract';

export default class FilmList extends AbstractView {
  getTemplate () {
    return `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>  
    
  </section>`;
  }
}
