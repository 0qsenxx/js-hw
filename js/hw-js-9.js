// #1
const array = [12, 9, 8];
array[1] = 10;
console.log(array);

// #2
const clients1 = ["Senya", "Julia", "Kate"];
clients1.push("Roman");
console.log(clients1);

// #3
const array = [12, 62, 63, 95];
let totalSum = 0;

for (let i = 0; i < array.length; i++) {
  totalSum += array[i];
}

console.log(totalSum);

for (let element of array) {
  totalSum += element;
}

console.log(totalSum);

// #4
const numbers1 = [1, 3, 5, 2, 7];

for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

for (let element of numbers1) {
  console.log(element);
}

// #5
const clients2 = ["Mango", "Michael", "Rizend", "Morrigan", "Azriel"];

for (let i = 0; i < clients2.length; i++) {
  if (clients2[i].length > 5) {
    console.log(clients2[i]);
  }
}

// #6
const numbers2 = [6, 10, 30, 14, 63, 89, 29, 97, 62, 100];
let maxNumber = 0;

for (let number of numbers2) {
  if (maxNumber < number) {
    maxNumber = number;
  } else {
    continue;
  }
}
console.log(maxNumber);

for (let i = 0; i < numbers.length; i++) {
  maxNumber = Math.max(...numbers);
}
console.log(maxNumber);

for (let number of numbers) {
  maxNumber = Math.max(...numbers);
  console.log(maxNumber);
}

const randomNumbers = [
  Math.round(Math.random() * (1000 - 100) + 100),
  Math.round(Math.random() * (1000 - 100) + 100),
  Math.round(Math.random() * (1000 - 100) + 100),
  Math.round(Math.random() * (1000 - 100) + 100),
  Math.round(Math.random() * (1000 - 100) + 100),
  Math.round(Math.random() * (1000 - 100) + 100),
  Math.round(Math.random() * (1000 - 100) + 100),
  Math.round(Math.random() * (1000 - 100) + 100),
  Math.round(Math.random() * (1000 - 100) + 100),
];

for (let i = 0; i < randomNumbers.length; i++) {
  maxNumber = Math.max(...randomNumbers);
}

console.log(maxNumber);

// #7
const numbers = [6, 10, 30, 14, 63, 89, 29, 97, 62, 100];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`Це парне число ${numbers[i]}`);
  } else {
    console.log(`Це непарне число ${numbers[i]}`);
  }
}

for (let number of numbers) {
  if (number % 2 === 0) {
    console.log(`Це парне число ${number}`);
  } else {
    console.log(`Це непарне число ${number}`);
  }
}
