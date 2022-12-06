import CONFIG from '../../globals/config';

const detailCafe = (cafe) => `
  <h2 class='movie__title'>${cafe.name}</h2>
  <img class='movie__poster lazyload' alt='${cafe.name}' data-src='${CONFIG.BASE_IMAGE_URL + cafe.pictureId}'/>
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${cafe.address}</p>
    <h4>Kota</h4>
    <p>${cafe.city}</p>
    <h4>Rating</h4>
    <p>${cafe.rating}</p>
  </div>

  <div class="movie__overview">
    <h3>Deskripsi</h3>
    <p>${cafe.description} minutes</p>
  </div>

  
  <div class="detail-menu">
  <h3>Menu</h3>
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${cafe.menus.foods.map((food, i) => `
            <li><p>${i + 1}) ${food.name}</p></li>
          `).join('')}
        <ul>
      </div>

      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${cafe.menus.drinks.map((drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>
          `).join('')}
        <ul>
      </div>
    </div>

  <div class="review">
  <h3>Review</h3>
  <p>${cafe.customerReviews.map((review) => `
    <div class="detail-review-item">
      <div class="review-header">
        <p class="review-name">${review.name}</p>

        <p class="review-date">${review.date}</p>
      </div>

      <div class="review-body">
        ${review.review}
      </div>
    </div>
    `).join('')}</p>
  </div> 
`;

export default detailCafe;
