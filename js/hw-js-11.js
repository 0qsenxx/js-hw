// #1
const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  };
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// #2
const calculateEngravingPrice = function (message, pricePerWord) {
    const splitMessage = message.split(' ');
    const splitMessageLength = splitMessage.length;
    const findPricePerWord = splitMessageLength * pricePerWord;
    return findPricePerWord;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120


// #3
const findLongestWord = function (string) {
    const stringSplit = string.split(' ');
    let longestWord = '';
    for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i].length > longestWord.length) {
            longestWord = stringSplit[i];
        };
    };
    return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'


// #4
const formatString = function (string) {
    if (string.length > 40) {
        const stringSplice = string.slice(0, 40) + '...';
        return stringSplice;
    } else {
        return string;
    };
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// повернеться оригінальний рядок

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// повернеться форматований рядок

console.log(formatString("Curabitur ligula sapien."));
// повернеться оригінальний рядок

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);

// #5
const checkForSpam = function (message) {
    const spam = 'spam';
    const sale = 'sale';
    const normalizedMessage = message.toLowerCase();
    const findForbiddenWords = normalizedMessage.includes(spam);
    const findForbiddenWords2 = normalizedMessage.includes(sale);
    return findForbiddenWords || findForbiddenWords2;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// #6
const numbers = [];
let total = 0;
let input = Number(prompt("Введіть число"));


while (input) {
  if (!isNaN(input)) {
    numbers.push(input);
    input = Number(prompt("Введіть число"));
    total = numbers.reduce((acc, num) => acc + num, 0);
  } else if (isNaN(input)) {
    break;
  } else if (input === null) {
    break;
  };
};
console.log(total);

// #7
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  for (const check of logins) {
    if (check.length >= 4 && check.length <= 16) {
      return true;
    } else {
      return false;
    };
  };
};

const isLoginUnique = function (allLogins, login) {
  const findLogin = allLogins.includes(login);

  if (findLogin === true) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function (allLogins, login) {
  if (isLoginValid() === true && isLoginUnique === true) {
    allLogins.push(login);
    console.log('Логін успішно доданий!');
  } else if (!isLoginValid(login)) {
    console.log("Помилка! Логін повинен бути від 4 до 16 символів");
  } else if (!isLoginUnique(allLogins, login)) {
    console.log("Такий логін уже використовується!");
  };
  return login;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'