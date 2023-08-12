// #1
function makePizza1() {
  return "Your pizza is being prepared, please wait.";
}
const result1 = makePizza1();
const pointer = makePizza1;

// #2
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza2(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
makeMessage("Royal Grand", makePizza2);

// #3
function makePizza3(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza3("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza3("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

// #4
const btnRef1 = document.querySelector('[data-button]');
function btnClick () {
    alert('Hello World!');
};
btnRef1.addEventListener('click', btnClick);

// #5
const btnRef2 = document.querySelector("[data-button]");
const clickRef = document.querySelector("[data-click-count]");
let clickSum = 0;

const sumClick = function (e) {
    clickSum += 1;
    clickRef.textContent = clickSum;
  return clickSum;
};

btnRef2.addEventListener("click", sumClick);

// #6
const applyCallbackToEachElement = function (arr, callback) {
  return callback(arr);
};

const array = [1, 2, 3, 4, 5];

const squareCallback = function (arr) {
  const newArr = [];
  for (let arrElement of arr) {
    newArr.push(arrElement * arrElement)
  };
  return newArr;
};

const result2 = applyCallbackToEachElement(array, squareCallback);

console.log(result2);

// #7
const calculateDiscountedPrice = function (price, discount, callback) {
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