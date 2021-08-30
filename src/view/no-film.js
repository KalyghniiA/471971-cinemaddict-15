import AbstractView from './abstract';

export default class NoFilm extends AbstractView {
  getTemplate () {
    return `<section class="films-list">
        <h2 class="films-list__title">Loading...</h2>
        </section>`;
  }
}
