// !1
const galleryListRef = document.querySelector("[data-gallery]");
const galleryItemsRef = galleryListRef.children;
const imagePreviewRef = document.querySelector("[data-preview=image]");
const backdropRef = document.querySelector("[data-backdrop]");
let i = 0;

imagePreviewRef.addEventListener("click", (e) => {
  backdropRef.classList.toggle("show-modal");
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight" && i < galleryItemsRef.length - 1) {
      galleryItemsRef[i].classList.remove("full-image-container");
      galleryItemsRef[i].firstElementChild.classList.remove("full-image");

      galleryItemsRef[i + 1].classList.add("full-image-container");
      galleryItemsRef[i + 1].firstElementChild.classList.add("full-image");
      i++;
    }

    if (event.code === "ArrowLeft" && i < galleryItemsRef.length - 1) {
      galleryItemsRef[i].classList.remove("full-image-container");
      galleryItemsRef[i].firstElementChild.classList.remove("full-image");

      galleryItemsRef[i - 1].classList.add("full-image-container");
      galleryItemsRef[i - 1].firstElementChild.classList.add("full-image");
      i--;
    }
  });
});

backdropRef.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("full-image-container")) {
    backdropRef.classList.toggle("show-modal");
  }
});

// !2

// ?refs
const quantityInputRef = document.querySelector("[data-input=quantity]");
const renderButtonRef = document.querySelector("[data-action=render]");
const destroyButtonRef = document.querySelector("[data-action=destroy]");
const boxesRef = document.getElementById("boxes");

// ?colors
let r = "";
let g = "";
let b = "";
let backgroundColor = ``;

// function createBg() {
//   r = Math.floor(Math.random() * (250 - 0));
//   g = Math.floor(Math.random() * (250 - 0));
//   b = Math.floor(Math.random() * (250 - 0));
//   backgroundColor = `rgb(${r}, ${g}, ${b})`;
//   return backgroundColor;
// }

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let i = 0; i < quantityInputRef.value; i++) {
    const createBox = document.createElement("div");
    const r = Math.floor(Math.random() * (250 - 0));
    const g = Math.floor(Math.random() * (250 - 0));
    const b = Math.floor(Math.random() * (250 - 0));
    // width += 10;
    // height += 10;

    if (width > 180) {
      width = 30;
      height = 30;
    }

    createBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    createBox.style.width = `${width}px`;
    createBox.style.height = `${height}px`;
    createBox.style.borderRadius = '15px'
    width += 10;
    height += 10;
    boxesRef.append(createBox);
  };
};

function destroyBoxes () {
  boxesRef.textContent = '';
}

renderButtonRef.addEventListener('click', createBoxes);
destroyButtonRef.addEventListener('click', destroyBoxes);