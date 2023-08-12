// #1
const user = {
  hobby: "Daving",
  premium: true,
};
const { hobby, premium } = user;
const keys = Object.keys(user);
const addMood = (user.mood = "happy");
const changeHobby = (user.hobby = "skydiving");
const changeSubckribe = (user.premium = false);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

// #2
const hotel = {
  stars: 5,
  capacity: 100,
  city: "Dnipro",
};
const { stars, capacity, city } = hotel;
const findBestEmployee1 = (employees) => {
  const keys = Object.keys(employees).length;
  console.log(keys);
  return keys;
};
findBestEmployee1(hotel);

// #3
const workers1 = {
  senya: 60,
  illya: 10,
  tom: 35,
  elys: 55,
};
const { senya: senya1, illya: illya1, tom: tom1, elys: elys1 } = workers1;
const findBestEmployee2 = (employees) => {
  let maxNum = 0;
  const keys = Object.keys(employees);
  let bestEmployee = "";

  for (const key of keys) {
    if (maxNum < employees[key]) {
      maxNum = employees[key];
      bestEmployee = key;
    }
  }
  console.log(`Completed the most tasks ${bestEmployee}: ${maxNum}`);
};
findBestEmployee2(workers1);

// #4
const workers2 = {
  senya: 30000,
  illya: 19000,
  tom: 16700,
  elys: 20000,
  julia: 55000,
};
const {
  senya: senya2,
  illya: illya2,
  tom: tom2,
  elys: elys2,
  julia: julia2,
} = workers2;
const countTotalSalary = (employees) => {
  const values = Object.values(employees);
  let totalSallary = 0;

  for (const value of values) {
    totalSallary += value;
  }
  console.log(totalSallary);
  return totalSallary;
};
countTotalSalary(workers2);

// #5
const friends = [
  {
    prop: "jfkkd",
    name: "Tatiana",
    phone: "iPhone",
  },
  {
    prop: "kcm",
    name: "Tatiana",
    phone: "iPhone",
  },
  {
    prop: "wlxcnfk",
    name: "Tatiana",
    phone: "iPhone",
  },
];
const { prop, name: name1, phone } = friends[0];
const getAllPropValues = (arr, prop) => {
  const propArr = [];
  for (const friend of arr) {
    propArr.push(friend[prop]);
  }
  return propArr;
};
console.log(getAllPropValues(friends, "prop"));

// #6
const products = [
  {
    name: "apple",
    price: 10,
    quantity: 10,
  },
  {
    name: "strabery",
    price: 8,
    quantity: 24,
  },
  {
    name: "milk",
    price: 40,
    quantity: 2,
  },
];
const { name: name2, price, quantity } = products;
const calculateTotalPrice = (allProdcuts, productName) => {
  let price = 0;
  for (const product of allProdcuts) {
    if (productName === product.name) {
      price = product.price * product.quantity;
      console.log(`Ціна за ${productName} складає ${price}`);
    }
  }
  return price;
};
calculateTotalPrice(products, "apple");

// #7
const account = {
  ballance: 100000,
  lastTransaction: {
    city: "Dnipro",
    country: "Ukraine",
    sum: 1000,
    shop: "Nike",
    category: "Clothes and shoes",
    address: "Schevchenko Street 29",
  },
  creditLimit: 80000,
  cardNum: "1234 5678 9101 1123",
  cvv: 109,
  validity: "08/29",
  banking: "VISA",
  cashback: 50,
  client: "Pupkin Ivan",

  checkInfoAboutLastTransaction() {
    const keys = Object.keys(this);
    const { city, country, sum, shop, category, address } =
      this.lastTransaction;
    console.log(
      `This is information on your last transaction. City: ${city}, county: ${country}, sum: ${sum}, shop: ${shop}, category: ${category}, address: ${address}`
    );
  },

  checkBallance() {
    const { ballance } = this;
    console.log(ballance);
  },

  checkCashBack() {
    const { cashback } = this;
    console.log(cashback);
  },

  whatCreditLimit() {
    const { creditLimit } = this;
    console.log(`Your credit limit ${creditLimit}`);
  },

  transferToCard(cardNum, sum) {
    const { ballance, creditLimit } = this;

    if (
      cardNum.length < 16 ||
      cardNum === undefined ||
      cardNum === null ||
      sum === undefined ||
      sum === null ||
      isNaN(sum)
    ) {
      console.log("Ви некоректно вказали номер картки");
    } else if (sum > ballance + creditLimit) {
      console.log("Сума платежа перевищує ваш баланс");
    } else if (
      cardNum.length === 16 &&
      cardNum !== undefined &&
      cardNum !== null &&
      sum <= ballance + creditLimit &&
      sum !== undefined &&
      sum !== null &&
      !isNaN(sum)
    ) {
      console.log(
        `Платіж на картку ${cardNum} сумою ${sum} успішно надісланий`
      );
      const newBallance = ballance + creditLimit - sum;
      console.log(newBallance);
      if (sum > ballance) {
        ballance + creditLimit;
        console.log(`Ви використали ${sum - ballance} кредитного ліміту`);
        const newCreditLimit = creditLimit - sum;
        console.log(newCreditLimit);
      }
    } else if (cardNum > 16) {
      console.log(
        `Перевірте номер картки який ви вказали, він перевищює кількість символів`
      );
    }
  },

  checkBallanceWithCreditLimit() {
    const { ballance, creditLimit } = this;
    const ballanceWihCreditLimit = ballance + creditLimit;
    console.log(`Your ballance with credit limit ${ballanceWihCreditLimit}`);
  },
};
account.checkCashBack();
account.checkInfoAboutLastTransaction();
account.transferToCard("1846026592402150", 180000);
account.checkBallance();
account.checkBallanceWithCreditLimit();
account.whatCreditLimit();
console.log(account.ballance);
