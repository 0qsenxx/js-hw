// #1
const inputRef = document.querySelector("#text-input");
const buttonRef = document.querySelector("#text-button");

inputRef.addEventListener("input", () => {
  if (inputRef) {
    buttonRef.textContent = inputRef.value;
  } else {
    buttonRef.textContent = "empty";
  }
});

// #2
const task2ImageRef = document.querySelector(".image-task2");
task2ImageRef.src =
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";

// #3
const linkRef = document.querySelector(".link-task3");
const task3ImageRef = document.querySelector(".image-task3");
linkRef.href = "https://github.com/0qsenxx/js-hw";
task3ImageRef.alt = "img-task3";

// #4
const listRef = document.querySelector(".list-task4");
listRef.firstElementChild.textContent = "new text";
// listRef.children[0].textContent = 'new text';
