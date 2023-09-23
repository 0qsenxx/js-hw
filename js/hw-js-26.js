//? #1
// const categoriesListRef = document.querySelector('#categories');
const categoriesListRef = document.getElementById("categories");
const titleRef = document.querySelector(".animals");
const task1NewElem = document.createElement("p");
const task1NewElem2 = document.createElement("p");

console.log(`У списку ${categoriesListRef.children.length} категорії.`);
console.log(`Категорія: ${titleRef.textContent}`);

task1NewElem.textContent = `У списку ${categoriesListRef.children.length} категорії.`;
task1NewElem2.textContent = `Категорія: ${titleRef.textContent}`;
categoriesListRef.append(task1NewElem, task1NewElem2);

// #2
// const newListRef = document.querySelector('#ingredients');
const newListRef = document.getElementById("ingredients");
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const createItem = ingredients.map((elem) => {
  const newElem = document.createElement("li");
  newElem.textContent = elem;
  newListRef.append(newElem);
});

// #3
const galleryRef = document.getElementById("gallery");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const addPhoto = images.map(
  (photo) =>
    `<li class="gallery__item"><img src="${photo.url}" alt="${photo.alt}"/></li>`
);
galleryRef.insertAdjacentHTML("beforeend", addPhoto);

// #4
const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.getElementById("value");
let counterValue = 0;

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

incrementRef.addEventListener("click", increment);
decrementRef.addEventListener("click", decrement);
valueRef.textContent = counterValue;
