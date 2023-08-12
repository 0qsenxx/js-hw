// #1
const peoples = [
  {
    name: "Senya",
    work: "IT company",
    sallary: 60000,
    friend: "Kate",
    friends: ["Kate", "Bob", "Natalia"],
    skills: ["JavaScript", "Sport", "Backend"],
  },
  {
    name: "Julia",
    work: "IT company",
    sallary: 65000,
    friend: "Tom",
    friends: ["Tom", "Monika", "Gabriel", "Roman"],
    skills: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    name: "Tatiana",
    work: "IT company",
    sallary: 65000,
    friend: "Roman",
    friends: ["Matilda", "Olga"],
    skills: ["Backend", "Sport"],
  },
];

const totalSum = peoples.reduce((acc, people) => acc + people.sallary, 0);
console.log(totalSum);

// #2
const findPeopleByName = (arrObg, friendName) => {
  const findPeople = arrObg.reduce((acc, people) => {
    if (people.friend === friendName) {
      acc.push(people.name);
    }
    return acc;
  }, []);
  return findPeople;
};
console.log(findPeopleByName(peoples, "Kate"));

// #3
const sortFriends = peoples.toSorted(
  (a, b) => b.friends.length - a.friends.length
);
console.log(sortFriends);

// #4
const flatArr = peoples.flatMap((people) => people.skills);
const filterArr = flatArr
  .filter((friend, idx, arr) => arr.indexOf(friend) === idx)
  .toSorted((a, b) => a.localeCompare(b));
console.log(filterArr);
