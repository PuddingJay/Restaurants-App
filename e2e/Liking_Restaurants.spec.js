/* eslint-disable no-undef */
Feature('Liking Restaurants');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.cafes');
  I.see('Silahkan tambah restaurant favoritemu dulu di halaman utama', '.cafes');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Silahkan tambah restaurant favoritemu dulu di halaman utama', '.cafes');

  I.amOnPage('/');

  I.waitForElement('.cafe-item a', 10);

  const firstRestaurant = locate('.cafe-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cafe-item');

  const likedRestaurantTitle = await I.grabTextFrom('.cafe-item__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario(' unlike restaurant', async ({ I }) => {
  I.see('Silahkan tambah restaurant favoritemu dulu di halaman utama', '.cafes');

  I.amOnPage('/');

  I.waitForElement('.cafe-item a', 10);
  const firstRestaurant = locate('.cafe-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cafe-item');

  const likedRestaurantTitle = await I.grabTextFrom('.cafe-item__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cafes');
  const unlikedRestaurant = await I.grabTextFrom('.cafes');

  assert.strictEqual(unlikedRestaurant, 'Silahkan tambah restaurant favoritemu dulu di halaman utama');
});
