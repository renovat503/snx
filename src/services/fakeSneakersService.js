import * as brandAPI from "./fakeBrandService";

const shoppingCart = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Nike Dunk Low",
    price : 225,
    description : "Retro White Black Panda (2021)",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 0,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/one.jpeg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "YEEZY BOOST 350 V2 REFLECTIVE",
    price : 295,
    description : "Beluga",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/two.jpg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "YEEZY 500",
    price : 285,
    description : "Taupe Light",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/three.jpg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "WMNS AIR JORDAN 1 RE HI OG SL",
    price : 860,
    description : "Satin Shattered Backboard",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL :require("../assets/sneakers/four.jpeg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "AIR JORDAN 1 HIGH OG WMNS",
    price : 191,
    description : "UNC to Chicago",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/five.jpg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "YEEZY BOOST 350 V2",
    price : 979,
    description : "Beluga",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/six.jpg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "AIR JORDAN 1 RETRO HIGH",
    price : 2395,
    description : "Off-White - UNC",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/seven.jpeg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "AIR JORDAN 4 RETRO KAWS SAMPLE",
    price : 4295,
    description : "Kaws Sample",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/eight.jpeg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "DUNK LOW",
    price : 295,
    description : "TEAM GREEN",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/nine.jpg")
  }
]

const sneakers = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Nike Dunk Low",
    price : 225,
    description : "Retro White Black Panda (2021)",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 0,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/one.jpeg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "YEEZY BOOST 350 V2 REFLECTIVE",
    price : 295,
    description : "Beluga",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/two.jpg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "YEEZY 500",
    price : 285,
    description : "Taupe Light",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/three.jpg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "WMNS AIR JORDAN 1 RE HI OG SL",
    price : 860,
    description : "Satin Shattered Backboard",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL :require("../assets/sneakers/four.jpeg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "AIR JORDAN 1 HIGH OG WMNS",
    price : 191,
    description : "UNC to Chicago",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/five.jpg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "YEEZY BOOST 350 V2",
    price : 979,
    description : "Beluga",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/six.jpg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "AIR JORDAN 1 RETRO HIGH",
    price : 2395,
    description : "Off-White - UNC",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/seven.jpeg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "AIR JORDAN 4 RETRO KAWS SAMPLE",
    price : 4295,
    description : "Kaws Sample",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/eight.jpeg")
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "DUNK LOW",
    price : 295,
    description : "TEAM GREEN",
    brand: { _id: "5b21ca3eeb7f6fbccd471818", name: "Nike" },
    numberInStock: 6,
    publishDate: "2018-01-03T19:04:28.809Z",
    imageURL : require("../assets/sneakers/nine.jpg")
  }
];

export function getShoppingCart() {
  return shoppingCart;
}

export function getSneakers() {
  return sneakers;
}

export function getSneaker(id) {
  return sneakers.find(s => s._id === id);
}

export function saveSneaker(sneaker) {
  let sneakerInDb = sneakers.find(s => s._id === sneaker._id) || {};
  sneakerInDb.name = sneaker.name;
  sneakerInDb.price = sneaker.price;
  sneakerInDb.description = sneaker.description;
  sneakerInDb.brand = brandAPI.brands.find(b => b._id === sneaker.brandId);
  sneakerInDb.numberInStock = sneaker.numberInStock;
  

  if (!sneakerInDb._id) {
    sneakerInDb._id = Date.now();
    sneakers.push(sneakerInDb);
  }

  return sneakerInDb;
}

export function deleteSneaker(id) {
  let sneakerInDb = shoppingCart.find(s => s._id === id);
  shoppingCart.splice(shoppingCart.indexOf(sneakerInDb), 1);
  return sneakerInDb;
}
