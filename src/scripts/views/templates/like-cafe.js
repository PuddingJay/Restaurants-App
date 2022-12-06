const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate };
