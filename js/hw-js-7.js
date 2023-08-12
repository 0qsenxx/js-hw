// #1
let message1 = "hello world";

// message = 5;

if (true) {
  // message1 = 3;
  console.log(message1);
}
console.log(message1);

if (true) {
  let message2 = "bye world";
  message2 = "block scope";
  console.log(message2);
}
console.log(message2);

// #2
const lang = "ua";

switch (lang) {
  case "ua":
    console.log("Січень");
    break;

  case "en":
    console.log("January");
    break;

  case "esp":
    console.log("Enero");
    break;

  case "fr":
    console.log("Janvier");
    break;

  default:
    console.log("Неможливо перевести");
}

// #3
// const cofee = "кава";
// const tea = "чай";
// const juice = "сік";
let drink = prompt("Який напій ви бажаєте придбати? Чай, кава або сік");
let price;
let message2;

switch (drink) {
  case "кава":
    price = 120;
    message2 = alert(`Ціна вашого напою ${price} гривень`);
    break;
  case "чай":
    price = 100;
    message2 = alert(`Ціна вашого напою ${price} гривень`);
    break;

  case "сік":
    price = 110;
    message2 = alert(`Ціна вашого напою ${price} гривень`);
    break;

  default:
    alert("Нажаль такого напою нема у наявності(((");
}
console.log(message2);

// #4
let weekDay = prompt("Який день тижня сьогодні?");
let message3;

switch (weekDay) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "пʼятниця":
    message3 = alert("сьогодні робочий день");
    break;
  case "субота":
  case "неділя":
    message3 = alert("сьогодні вихідний");
    break;
  default:
    message3 = alert("перевірте ваш запит");
}
console.log(message3);

// #5
let month = Number(prompt("Який номер поточного місяця?"));
let message4;

switch (month) {
  case 12:
  case 1:
  case "2":
    message4 = alert("Це зимній місяць");
    break;

  case 3:
  case 4:
  case 5:
    message4 = alert("Це весняний місяць");
    break;

  case 6:
  case 7:
  case 8:
    message4 = alert("Це літній місяць");
    break;

  case 9:
  case 10:
  case 11:
    message4 = alert("Це осінній місяць");
    break;

  default:
    message4 = alert("Такої пори року не знайдено");
}
console.log(message4);
