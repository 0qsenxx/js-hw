// #1
// Напишіть функцію, яка отримує масив рядків
// і  повертає новий масив, в якому кожен
// з рядків складається  з першої та останньої
// букви відповідної строки вхідного масиву.

const array2 = [
    "apple",
    "banana",
    "orange",
    "banana",
    "grape",
    "apple",
    "kiwi",
  ];
  const newArr1 = array2.map((arr) => {
    const slice = arr.slice(0,1);
    const slice2 = arr.slice(arr.length - 1);
    return slice + slice2;
  });
  console.log(newArr1);

// #2
// У вас є масив обʼєктів user, і у кожного
// з обʼєктів є name, surname та id.
// Напишіть код, який створить ще один масив
// обʼєктів з параметрами id й fullName, де fullName
// – складається з name та surname.

const peoples = [
  { name: "John", surname: "Doe", age: 32, occupation: "programmer" },
  { name: "Jane", surname: "Lee", age: 26, occupation: "teacher" },
  { name: "Mike", surname: "Watson", age: 42, occupation: "engineer" },
  { name: "Emily", surname: "Brad", age: 29, occupation: "designer" },
  { name: "Emily", surname: "Brad", age: 29, occupation: "designer" },
];
const newArr2 = peoples.map((people) => ({
  fullName: `${people.name} ${people.surname}`,
  id: Math.round(Math.random() * (200000 - 150000) + 150000),
  ...people,
}));
console.log(newArr2);

// const newArr3 = peoples.map((people) => ({
//   fullName: `${people.name} ${people.surname}`,
//   id: Math.round(Math.random() * (200000 - 150000) + 150000),
// }));
// console.log(newArr3);