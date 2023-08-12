// #1
const workers = [
  {
    name: "Senya",
    sallary: 70000,
    eyeColor: "blue",
    gender: "man",
    isActive: true,
    email: "semen@gmail.com",
    age: 32,
  },
  {
    name: "Julia",
    sallary: "75000",
    eyeColor: "green",
    gender: "woman",
    isActive: true,
    email: "julia@gmail.com",
    age: 18,
  },
  {
    name: "Roman",
    sallary: 55000,
    eyeColor: "black",
    gender: "man",
    isActive: false,
    email: "roman@gmail.com",
    age: 22,
  },
];
const namesArr = workers.map((worker) => worker.name);
console.log(namesArr);

// #2
const findWorker = (eyeColor) =>
  workers.find((worker) => worker.eyeColor === eyeColor);
console.log(findWorker("green"));

// #3
const namesByGender = (arrObj, gen) => {
  const filterByGender = arrObj.filter((value) => value.gender === gen);
  const arrNamesByGender = filterByGender.map((value) => value.name);
  return arrNamesByGender;
};
console.log(namesByGender(workers, "man"));

// #4
const checkActive = workers.filter((active) => !active.isActive);
console.log(checkActive);

// #5
const findByMail = (mail) =>
  workers.find((worker) =>
    worker.email === mail ? console.log(worker.email) : undefined
  );
findByMail("julia@gmail.com");

// #6
const ageArr = workers.map((worker) => worker.age);
const sortAgeArr = ageArr.sort();
console.log(sortAgeArr);
const sortByAge = (arrObj, minAge, maxAge) => {
  const filterByAge = arrObj.filter(
    (value) => value.age >= minAge && value.age <= maxAge
  );
  return filterByAge;
};
console.log(sortByAge(workers, 20, 33));
