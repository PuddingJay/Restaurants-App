import UrlParser from '../../routes/url-parser';
import cafeDbSource from '../../data/cafedb-source';
import detailCafe from '../templates/detail-cafe';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div tabindex='0' id='main-content'>
      <div class="movie"></div>
      <div id="likeButtonContainer"></div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('.movie');
    const detail = await cafeDbSource.getRestaurantDetail(url.id);

    detailContainer.innerHTML = detailCafe(detail.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: detail.restaurant.id,
        name: detail.restaurant.name,
        description: detail.restaurant.description,
        city: detail.restaurant.city,
        rating: detail.restaurant.rating,
        address: detail.restaurant.address,
        pictureId: detail.restaurant.pictureId,
      },
    });
  },
};

export default Detail;
