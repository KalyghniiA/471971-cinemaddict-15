import { createFilmCardElement } from './film-card';

export const createTopRatedFilmList = (films) => `    <section class="films-list films-list--extra">
<h2 class="films-list__title">Top rated</h2>

<div class="films-list__container">
  ${createFilmCardElement(films[0])}
  ${createFilmCardElement(films[1])}
</div>
</section>`;
