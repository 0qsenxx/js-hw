// #1
const myArray = {
  name: "Senya",
  age: 13,
  city: "Mariupol",
  occupation: "diving",
};
console.log(myArray.name);
console.log(myArray.school);

// #2
const goods = {
  jeens: {
    size: "S",
    price: 504.99,
    availability: true,
    country: undefined,
    brand: "Zara",
    color: ["Light blue", "Purple"],
  },
  sneekers: {
    size: "39",
    price: 2499.99,
    availability: false,
    country: "Germany",
    brand: "Nike",
    color: ["White", "Black"],
  },
  ring: {
    size: 15,
    price: 100000,
    availability: true,
    country: "France",
    brand: "Cartier",
    color: ["Gold", "Silver", "White gold"],
  },
  shorts: {
    size: "L",
    price: 1500,
    availability: false,
    country: "Japan",
    brand: "Mango",
    color: ["Green", "Orange"],
  },
};
console.log(goods.ring.price);
console.log(goods.sneekers.brand);

// #3
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

console.log(apartment.rating);
console.log(apartment.descr);
console.log(apartment.price);
console.log(apartment.tags);

const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];

const ownerName = apartment.owner["name"];
const ownerPhone = apartment.owner["phone"];
const ownerEmail = apartment.owner["email"];

const numberOfTags = apartment["tags"].length;
const firstTag = apartment["tags"][0];
const lastTag = apartment["tags"][2];

apartment.price = 5000;
apartment.rating = 4.7;
apartment.name = "Henry Sibola";
apartment.tags.push("trusted");

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};

// #4
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];
const product = {
  name,
  price,
  image,
  tags,
};

// #5
const emailInputName = "email";
const passwordInputName = "password";
const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};
console.log(credentials.email);
