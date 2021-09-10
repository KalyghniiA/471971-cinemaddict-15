import AbstractView from './abstract';

export default class TopRatedList extends AbstractView {

  getTemplate () {
    return `<section class="films-list films-list--extra films-list--top-rated">
    <h2 class="films-list__title">Top rated</h2>
    
    <div class="films-list__container" data-type-list="topRated">
      
    </div>
    </section>`;
  }
}
