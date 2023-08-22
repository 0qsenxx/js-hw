// #1
// Напиши функцію-конструктор Account, яка створює об'єкт
// з властивостями login і email. В prototype функції-конструктора
//  добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};
// console.log(Account.prototype.getInfo); // function

const mango1 = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
mango1.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly1 = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
poly1.getInfo(); // Login: Poly, Email: poly@mail.com

// #2
// Напиши клас User для створення користувача з наступними властивостями:
// name — рядок
// age — число
// followers — число
// Добав метод getInfo(), який, виводить рядок:
// User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

const User = function ({ name, age, followers }) {
  this.name = name;
  this.age = age;
  this.followers = followers;
};
User.prototype.getInfo = function () {
  console.log(
    `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
  );
};

const mango2 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
mango2.getInfo(); // User Mango is 2 years old and has 20 followers
const poly2 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
poly2.getInfo(); // User Poly is 3 years old and has 17 followers

// #3
// Напиши клас Storage, який буде створювати об'єкти
// для управління складом товарів. При виклику буде отримувати
// один аргумент - початковий масив товарів, і записувати його у властивість items.
// Додай методи класу:
// getItems() — повертає масив поточних товарів
// addItem(item) — отримує новий товар і додає його до поточних
// removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних

const Storage = function (items) {
  this.items = items;
};

// * getItems
Storage.prototype.getItems = function () {
  return this.items;
};

// * addItem
Storage.prototype.addItem = function (item) {
  return this.items.push(item);
};

// * removeItem
Storage.prototype.removeItem = function (item) {
  const findItem = this.items.findIndex((elem) => elem === item);
  const removeItem = items.splice(findItem, 1);
  return removeItem;
};

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);
const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
