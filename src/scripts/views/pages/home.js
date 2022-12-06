import cafeDbSource from '../../data/cafedb-source';
import listCafe from '../templates/list-cafe-template';

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Satukan Perbedaan dengan SaMakan</h1>
        <p class="hero__tagline">Berbeda-beda tetapi satu tempat makan</p>
      </div>
    </div>
    <div tabindex='0' id="main-content" class="explore">
      <h1 class="explore__label">Cari Tempat Makan</h1>
      <div id='list-cafe' class="cafes"></div>
    </div>
    `;
  },

  async afterRender() {
    const list = await cafeDbSource.getRestaurantList();
    console.log(list);
    const listContainer = document.querySelector('.cafes');
    list.restaurants.forEach((movie) => {
      listContainer.innerHTML += listCafe(movie);
    });
  },
};

export default Home;
