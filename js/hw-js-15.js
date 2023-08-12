// #1
const user = {
  hobby: "Daving",
  premium: true,

  addMood() {
    this.mood = "happy";
  },

  changeHobby() {
    this.hobby = "skydiving";
  },

  changeSubckribe() {
    this.premium = false;
  },
};
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

  countProps(obj) {
    const keys = Object.keys(obj).length;
    console.log(keys);
    return keys;
  },
};
hotel.countProps(hotel);

// #3
const workers1 = {
  senya: 60,
  illya: 10,
  tom: 35,
  elys: 55,

  findBestEmployee(employees) {
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
  },
};
workers1.findBestEmployee(workers1);

// #4
const workers2 = {
  senya: 30000,
  illya: 19000,
  tom: 16700,
  elys: 20000,
  julia: 55000,

  countTotalSalary(employees) {
    const values = Object.values(employees);
    let totalSallary = 0;

    for (const value of values) {
      totalSallary += value;
    }
    console.log(totalSallary);
    return totalSallary;
  },
};

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
    console.log(
      `This is information on your last transaction. City: ${this.lastTransaction.city}, county: ${this.lastTransaction.country}, sum: ${this.lastTransaction.sum}, shop: ${this.lastTransaction.shop}, category: ${this.lastTransaction.category}, address: ${this.lastTransaction.address}`
    );
  },

  checkBallance() {
    console.log(this.ballance);
  },

  checkCashBack() {
    console.log(this.cashback);
  },

  whatCreditLimit() {
    console.log(`Your credit limit ${this.creditLimit}`);
  },

  transferToCard(cardNum, sum) {
    if (
      cardNum.length < 16 ||
      cardNum === undefined ||
      cardNum === null ||
      sum === undefined ||
      sum === null ||
      isNaN(sum)
    ) {
      console.log("Ви некоректно вказали номер картки");
    } else if (sum > this.ballance + this.creditLimit) {
      console.log("Сума платежа перевищує ваш баланс");
    } else if (
      cardNum.length === 16 &&
      cardNum !== undefined &&
      cardNum !== null &&
      sum <= this.ballance + this.creditLimit &&
      sum !== undefined &&
      sum !== null &&
      !isNaN(sum)
    ) {
      console.log(
        `Платіж на картку ${cardNum} сумою ${sum} успішно надісланий`
      );
      if (sum > this.ballance) {
        this.ballance + this.creditLimit;
        console.log(`Ви використали ${sum - this.ballance} кредитного ліміту`);
      }
    } else if (cardNum > 16) {
      console.log(
        `Перевірте номер картки який ви вказали, він перевищює кількість символів`
      );
    }
  },

  checkBallanceWithCreditLimit() {
    const ballanceWihCreditLimit = this.ballance + this.creditLimit;
    console.log(`Your ballance with credit limit ${ballanceWihCreditLimit}`);
  },
};
account.checkBallanceWithCreditLimit();
account.transferToCard("1846026592402159", 180000);
