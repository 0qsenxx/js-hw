// #1
// Напиши функцію-конструктор Account, яка створює об'єкт
// з властивостями login і email. В prototype функції-конструктора
//  добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

class Account {
  constructor({ login, email }) {
    this.login = login;
    this.email = email;
  }

  getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
}
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

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

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

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    return this.items.push(item);
  }

  removeItem(item) {
    if (this.items.includes(item) === true) {
      const findIdx = this.items.indexOf(item);
      return this.items.splice(findIdx, 1);
    }
  }
}

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

// #4
// Напиши клас StringBuilder. На вхід він отримує один параметр — рядок, який записує у властивість _value.
// Додай класу наступний функціонал:
// Геттер value — повертає поточне значення поля _value
// Метод append(str) — отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) — отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) — отримує параметр str (рядок) і додає його на початок і в кінець _value

class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

const builder = new StringBuilder(".");
builder.append("^");
console.log(builder.value); // '.^'
builder.prepend("^");
console.log(builder.value); // '^.^'
builder.pad("=");
console.log(builder.value); // '=^.^='

// #5
//* Напиши клас Car із зазначеними властивостями і методами.
/*
 * Додай статичний метод `getSpecs(car)`,
 * який приймає об'єкт-машину як параметр і виводить
 * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
 */
/*
 * Конструктор отримує об'єкт налаштувань.
 *
 * Додай властивості майбутнього екземпляра класу:
 * speed - поточна швидкість, початкова 0
 * price - ціна автомобіля
 * maxSpeed - максимальна швидкість
 * isOn - заведений автомобіль, значення true або false. Спочатку false
 * distance - загальний кілометраж, спочатку 0
 */
/*
 * Додай геттер і сеттер для властивості price,
 * який буде працювати з властивістю ціни автомобіля.
 */
/*
 * Додай код для того, щоб завести автомобіль
 * Записує у властивість isOn значення true
 */
/*
 * Додай код для того, щоб заглушити автомобіль
 * Записує у властивість isOn значення false,
 * і скидає поточну швидкість в 0
 */
/*
 * Додає до властивості speed отримане значення,
 * за умови, що результуюча швидкість
 * не більше, ніж значення властивості maxSpeed
 */
/*
 * Забирає від властивості speed отримане значення,
 * за умови, що результуюча швидкість не менше нуля
 */
/*
 * Додає в поле distance кілометраж (hours * speed),
 * але тільки в тому випадку, якщо машина заведена!
 */

class Car {
  // static getSpecs(car) {
  //   return `Max spead: ${car.maxSpeed}, Spead: ${car.speed}, Is on: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price}`;
  // }

  static getSpecs({ _maxSpeed, _speed, _isOn = false, _distance, _price }) {
    return `Max spead: ${_maxSpeed}, Spead: ${_speed}, Is on: ${_isOn}, Distance: ${_distance}, Price: ${_price}`;
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this._speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._price = newPrice);
  }

  turnOn() {
    return (this._isOn = true);
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    if (this._speed + value < this._maxSpeed) {
      this._speed += value;
    } else {
      console.error("Вказана швидкість перевищує максимальну");
    }
  }

  decelerate(value) {
    if (this._speed - value > 0) {
      this._speed -= value;
    } else {
      return undefined;
    }
  }

  drive(hours) {
    if (this._isOn === true) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
// console.log(mustang)
console.log(Car.getSpecs(mustang));
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
console.log(Car.getSpecs(mustang));
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
