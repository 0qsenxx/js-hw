// #1
const makePizza1 = () => "Your pizza is being prepared, please wait.";
const result1 = makePizza1();
const pointer = makePizza;

// #2
const deliverPizza = (pizzaName) => `Delivering ${pizzaName} pizza.`;
const makePizza2 = (pizzaName) =>
  `Pizza ${pizzaName} is being prepared, please wait...`;
const makeMessage = (pizzaName, callback) => callback(pizzaName);
makeMessage("Royal Grand", makePizza2);

// #3
const makePizza3 = (pizzaName, callback) => {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
};
makePizza3("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
makePizza3("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

// #4
const btnRef = document.querySelector("[data-button]");
const btnClick = () => {
  alert("Hello World!");
};
btnRef.addEventListener("click", btnClick);

// #5
const clickCountRef = document.getElementById("clickCount");
let clickCount = 0;
document.addEventListener("click", () => {
  clickCount++;
  clickCountRef.textContent = clickCount.toString();
});

// #6
const applyCallbackToEachElement = (arr, callback) => callback(arr);
const array = [1, 2, 3, 4, 5];
const squareCallback = (arr) => {
  const newArr = [];
  for (let arrElement of arr) {
    newArr.push(arrElement * arrElement);
  }
  return newArr;
};
const result2 = applyCallbackToEachElement(array, squareCallback);
console.log(result2);

// #7
const calculateDiscountedPrice = (price, discount, callback) => {
  const calculateDiscount = price / discount;
  const calculatePrice = price - calculateDiscount;
  return callback(calculatePrice);
};

const showDiscountedPrice = calculateDiscountedPrice(100, 10, function (price) {
  const message = `Discounted price: ${price}`;
  return message;
});
console.log(showDiscountedPrice);

calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90

// #8
// Завдання із відео
// 1.Коля
// 2.Правильно
// 3.Неправильно
// 4.
// 'use strict'
// let showMessage;
// if (2 > 1) {
//     showMessage = function () {
//         console.log('mesage');
//     };
// };
// showMessage();
