import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import listCafe from '../templates/list-cafe-template';

const Favorite = {
  async render() {
    return `
    <div tabindex='0' id="main-content" class="explore">
      <h1>Favorito</h1>
      <div id='list-cafe' class="cafes"></div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const list = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(list);
    const listContainer = document.querySelector('.cafes');

    if (list.length === 0) {
      listContainer.innerHTML = `
      Silahkan tambah restaurant favoritemu dulu di halaman utama
      `;
    }

    list.forEach((restaurant) => {
      listContainer.innerHTML += listCafe(restaurant);
    });
  },
};

export default Favorite;
