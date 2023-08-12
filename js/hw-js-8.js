// #1
const number1 = 7;
for (let i = 1; i <= 10; i += 1) {
  const amount = number1 * i;
  console.log(`${i} помножити на ${number1} = ${amount}`);
}

// #2
let sum = 0;
for (let i = 12; i <= 27; i += 1) {
  sum += i;
  // if (i === 27) {
  // console.log(sum);
  // };
}
console.log(sum);

// #3
let amount = 1;
for (let i = 3; i <= 9; i += 1) {
  if (i % 2 !== 0) {
    amount *= i;
    console.log(amount);
  } else {
    console.log(`число ${i} парне`);
  }
}

// #4
for (let i = 1; i <= 100; i += 1) {
  console.log(i);
  if (i === 49) {
    break;
  }
}

// #5
for (let i = 10; i <= 30; i += 1) {
  if (i === 15) {
    continue;
  }
  console.log(i);
}

// #6
const goods = 5;
const min = 500;
const max = 5000;
let randomPrice = 0;
let totalPrice = 0;

for (let i = 1; i <= goods; i += 1) {
  randomPrice = Math.round(Math.random() * (max - min) + min);
  console.log(`Ціна ${i} товару ${randomPrice}`);
  totalPrice += randomPrice;
  if (i === goods) {
    console.log(`Загальна сума ${totalPrice}`);
  }
}

// #7
let number2 = 0;

while (number2 < 5) {
  number2++;
  console.log(`число ${number2}`);
}

for (let i = 1; i <= 5; i++) {
  console.log(`число ${i}`);
}

do {
  number2++;
  console.log(`число ${number2}`);
} while (number2 < 5);

// #8
let grade = Number(prompt("Введіть вашу оцінку"));
console.log(grade);

for (let i = grade; i < 7; i++) {
  console.log(`У вас низький рівень знань ваш середній бал складає ${grade}`);
}

for (let i = grade; i <= 12; i++) {
  console.log(`У вас гарний рівень знань ваша оцінка ${grade}`);
}

// #9
let message1 = Number(prompt("Введіть число більше 100"));

while (message1 < 100) {
  message1 = alert("Спробуйте ще раз");
}

// #10
let message2 = Number(prompt("Введіть число більше 100"));

while (message2 < 100) {
  message2 = alert("Спробуйте ще раз");
  message2 = prompt("Введіть число більше 100");
}

// #11
let price = 0;

let country = prompt("У яку країну бажєте офрмити доставку");

switch (country.toLocaleLowerCase()) {
  case "китай":
    price = 100;
    alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case "чилі":
    price = 250;
    alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case "австралія":
    price = 170;
    alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case "індія":
    price = 80;
    alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case "ямайка":
    price = 120;
    alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  default:
    alert(`Нажаль у ${country} ми не доставляємо`);
}

console.log(country);
