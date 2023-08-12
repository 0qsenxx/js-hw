// #1
if ("0") {
  console.log("Привіт");
}

// #2
const inputData = prompt("Яка офіційна назва JavaScript");

if (inputData === "ECMAScript") {
  console.log("Правильно!");
} else {
  console.log("Ви не знаєте? ECMAScript");
}

// #3
const x1 = 10;
const x2 = 30;
const number = 45;

if (number < x1) {
  console.log(`${number} входить у відрізок до ${x1}`);
} else if (number > x1) {
  console.log(`${number} входить у відрізок після ${x1}`);
} else if (number >= x1 && number <= x2) {
  console.log(`${number} входить у відрізок від ${x1} до ${x2}`);
} else if (number < x1 || number > x2) {
  console.log(`${number} входить у відрізок менше ${x1} або більше ${x2}`);
}

// #4
const isOnline = false;
const isFriend = true;
const isDnd = false;

if (isOnline === true) {
  console.log("ви можете відкрити чат)))");
} else {
  console.log("ви не можете відкрити чат(((");
}

if (isFriend === true) {
  console.log("ви можете відкрити чат)))");
} else {
  console.log("ви не можете відкрити чат(((");
}

if (isDnd === true) {
  console.log("ви можете відкрити чат)))");
} else {
  console.log("ви не можете відкрити чат(((");
}

// #5
const free = "free";
const pro = "pro";
const vip = "VIP";
let userStatus = "pro";

if ((userStatus !== free && userStatus === pro) || userStatus === vip) {
  console.log(`Приятного перегладу)))`);
} else {
  console.log(
    `Нажаль ви не можете отримати доступ до контенту у вас ${free} підписка(((`
  );
}

// #6
const promtNumber = prompt("Введіть число");

if (promtNumber >= 55 && promtNumber <= 99) {
  console.log(`Число ${promtNumber} потрапляє у діапазон від 55 до 99 включно`);
} else {
  console.log(
    `Число ${promtNumber} не потрапляє в діапазон від 55 до 99 включно`
  );
};

// #7
let age;
age = 55;

if (age > 0 && age <= 16) {
  console.log("Ти ще дитина");
} else if (age >= 17 && age <= 60) {
  console.log("Ти дорослий");
} else if (age >= 61 && age <= 100) {
  console.log("Ти вже пенсіонер");
};

// #8
const firstName = "Semen";
const lastName = "Antipyuk";
const firstNameLength = firstName.length;
const lastNameLength = lastName.length;

if (firstNameLength > 4 && lastNameLength > 5) {
  console.log(firstNameLength + lastNameLength);
} else {
  console.log("ОЙ, неможливо виконати умову");
};

// #9
let result;
const a = 4;
const b = 7;
result = a + b < 4 ? (result = "Нижче") : (result = "Вище");
console.log(result);

// #10
const min = 1;
const max = 5;
const randomNumber = Math.round(Math.random() * (max - min) + min);

if (randomNumber === 1) {
  console.log("Випадкове число дорівнює 1");
} else if (randomNumber === 2) {
  console.log("Випадкове число дорівнює 2");
} else if (randomNumber === 3) {
  console.log("Випадкове число дорівнює 3");
} else if (randomNumber === 4) {
  console.log("Випадкове число дорівнює 4");
} else if (randomNumber === 5) {
  console.log("Випадкове число дорівнює 5");
};
