import CONFIG from '../../globals/config';

const listCafe = (cafe) => `
  <article class="cafe-item">    
    <a href='/#/detail/${cafe.id}' class="cafe-item__toDetail">
      <img class="cafe-item__thumbnail lazyload" alt="${cafe.name}" data-src="${CONFIG.BASE_IMAGE_URL + cafe.pictureId}"/>
      <h3 class="cafe-item__title">${cafe.name}</h3>
    </a>
    <div class="cafe-item__content">
      <p class="cafe-item__city">${cafe.city}</p>
      <p class="cafe-item__description">${cafe.description}</p>
    </div>
  </article>
      `;

export default listCafe;
