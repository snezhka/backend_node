const {generateInteger, generateFloat, generateArray} = require ('./helpers.js');
const {types, checkIns, features, photos, location, avatarIndex,
      priceIndex, typePrice, typeIndex, roomsIndex, guestsIndex,
      typesIndex, checkInsIndex, checkOutsIndex} = require ('./constants.js');

module.exports = class Offer {
  static titleNumber = 0;
  static descriptionNumber = 0;
  constructor() {
    this.location = {
      x: generateFloat(location.min_x, location.max_x, 5),
      y: generateFloat(location.min_y, location.max_y, 5),
    },
      this.author = {
        avatar: `img/avatars/user0${generateInteger(avatarIndex.min, avatarIndex.max)}.png`,
      },
      this.offer = {
        title: 'Объявление',
        address: `${this.location.x}, ${this.location.y}`,
      },
      this.type =
        Object.keys(types)[generateInteger(typesIndex.min, typesIndex.max)],
      this.price = generateInteger(typePrice[this.type], priceIndex.max),
      this.rooms = generateInteger(roomsIndex.min, roomsIndex.max),
      this.guests = generateInteger(guestsIndex.min, guestsIndex.max),
      this.checkIn =
        checkIns[generateInteger(checkInsIndex.min, checkInsIndex.max)],
      this.checkOut =
        checkOuts[
          generateInteger(checkOutsIndex.min, checkOutsIndex.max)
        ],
      this.description = 'Описание',
      this.features = generateArray(features),
      this.photos = generateArray(photos);
  }
}
