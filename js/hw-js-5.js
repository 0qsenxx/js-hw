// #1
const firstName = "Semen";
// 1 варіант
const firstNameReplace = firstName.replace("S", "@");
console.log(firstNameReplace);
// 2 варіант
// console.log(firstName.replace('S', '@'));

// #2
const userName = "Antipyuk Semen";
// 1 варіант
const userNameIndexOf = userName.indexOf(" ");
console.log(userNameIndexOf);
// 2 варіант
// console.log(userName.indexOf(' '));

// #3
const balance = "Ваш баланс поповнено на 1";
console.log("кількість символів завдання 3:", balance.length);
// 1 варіант
const balancePadEnd = balance.padEnd(29, 0);
console.log(balancePadEnd);
// 2 варіант
// console.log(balance.padEnd(29, 0));

// #4
const result = 5 + 5 + "5";
console.log(typeof result);
const number = Number(result);
console.log("приклад якщо зробити числом через властивість Number:", number);

// #5
const pricePerItem = 3500;
const orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);

// #6
const productName = "Droid";
const pricePerItem2 = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message);

// #7
const pricePerDroid = 800;
const orderedQuantity2 = 6;
const deliveryFee = 50;
const totalPrice2 = pricePerDroid * orderedQuantity + deliveryFee;
const message2 = `You ordered droids worth ${totalPrice2} credits. Delivery ${deliveryFee} credits is included in total price.`;
console.log(message2);

// #8
const age = 20;
const passed = age >= 18;
console.log(passed);

// #9
const SAVED_PASSWORD = "qwerty123456";
const password = "javaScript top";
const isMatch = SAVED_PASSWORD === password;
console.log(isMatch);

// #10
let a = 5;
let b = 10;
let c = 15;
let d = 20;
a += 2;
b -= 4;
c *= 3;
d /= 10;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// #11
const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

// #12
let stringData;
let substringLength;
stringData = "hello world";
substringLength = 6;
const substring = stringData.slice(0, substringLength);
console.log(substring);
// const message = 'javaScript is fun';
// const lastIndex = message.length - 1;
// console.log(lastIndex);
// const lastLetter = message[lastIndex];
// console.log(lastLetter);

// #13
const number2 = 5;
const start = 10;
const end = 25;
const isNotInRange = number2 <= start && number2 >= end;
const isInRange = !isNotInRange;
console.log(isInRange);
