const { generateInteger, generateFloat, generateArray } = require('./helpers.js');
const { coords, types, checkIns, features, photos, avatarIndex,
  priceIndex, typePrice, typeIndex, roomsIndex, guestsIndex,
  typesIndex, checkInsIndex, checkOutsIndex, } = require('./constants.js');

module.exports = class Offer {
  static titleNumber = 0;
  static descriptionNumber = 0;
  constructor() {
    this.location = {
      x: generateFloat(coords.min_x, coords.max_x, 5),
      y: generateFloat(coords.min_y, coords.max_y, 5),
    }
    this.avatar = `img/avatars/user0${generateInteger(avatarIndex.min, avatarIndex.max)}.png`,
      this.title = 'Объявление',
      this.address = `${this.location.x}, ${this.location.y}`,
      this.type =
      Object.keys(types)[generateInteger(typesIndex.min, typesIndex.max)],
      this.price = generateInteger(typePrice[this.type], priceIndex.max),
      this.rooms = generateInteger(roomsIndex.min, roomsIndex.max),
      this.capacity = generateInteger(guestsIndex.min, guestsIndex.max),
      this.timein =
      checkIns[generateInteger(checkInsIndex.min, checkInsIndex.max)],
      this.timeout =
      checkOuts[
      generateInteger(checkOutsIndex.min, checkOutsIndex.max)
      ],
      this.description = 'Описание',
      this.features = generateArray(features),
      this.images = generateArray(photos);
  }
}
