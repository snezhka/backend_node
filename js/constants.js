const { generateInteger, generateFloat, generateArray } = require('./helpers.js');
const types = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const checkIns = ['12:00', '13:00', '14:00'];
module.exports = checkOuts = ['12:00', '13:00', '14:00'];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const coords = {
  min_x: 35.65,
  max_x: 35.7,
  min_y: 139.7,
  max_y: 139.8,
};

const avatarIndex = {
  min: 1,
  max: 6,
};

const priceIndex = {
  min: 100,
  max: 100000,
};

const typePrice = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};

const typeIndex = {
  min: 0,
  max: typePrice.length,
};

const roomsIndex = {
  min: 1,
  max: 3,
};

const guestsIndex = {
  min: 0,
  max: 2,
};

const typesIndex = {
  min: 0,
  max: Object.keys(types).length - 1,
};

const checkInsIndex = {
  min: 0,
  max: checkIns.length - 1,
};

const checkOutsIndex = {
  min: 0,
  max: checkOuts.length - 1,
};

module.exports = { coords, types, checkIns, features, photos, avatarIndex, priceIndex, typePrice, typeIndex, roomsIndex, guestsIndex, typesIndex, checkInsIndex, checkOutsIndex }



