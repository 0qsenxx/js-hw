// #1
const email = "semen.antipyuk@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

// #2
const firstSyllable = "My";
const secondSyllable = "name";
const thirdSyllable = "is";
// перший спосіб
const fullName = `${firstSyllable} ${secondSyllable} ${thirdSyllable} Semen`;
// другий спосіб
// const fullName = firstSyllable + ' ' + secondSyllable + ' ' + thirdSyllable + ' ' + 'Semen';
console.log(fullName);

// #3
const userName = "Semen";
const payment = 500;
// перший варіант
const message = `${userName}, дякуємо за замовлення! До сплати ${payment} гривень`;
// другий варіант
// const message = userName + ', дякуємо за замовлення!' + ' '  + 'До сплати' + ' '  +  payment + ' ' + 'гривень';
console.log(alert(message));
console.log(message);
