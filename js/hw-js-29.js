const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// function renderImgs () {

// }

const galleryListRef = document.querySelector(".js-gallery");
const galleryItemsRef = galleryListRef.children;
const galleryImgRef = document.querySelector(".gallery__image");
const boxRef = document.querySelector(".js-lightbox");
const bigImgRef = document.querySelector(".lightbox__image");
const closeButtonRef = document.querySelector("[data-action=close-lightbox]");
const overlayRef = document.querySelector(".lightbox__overlay");
let i = 0;

function closeModal() {
  boxRef.classList.remove("is-open");
  bigImgRef.src = "";
}

galleryItems.forEach((elem) => {
  galleryListRef.innerHTML += `<li class=gallery__item>
  <a class=gallery__link>
  <img class=gallery__image
  src=${elem.preview}
  data-source=${elem.preview}
  alt=${elem.description}
  />
  </a>
  </li>`;
});

galleryListRef.addEventListener("click", (evt) => {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  boxRef.classList.add("is-open");

  const findIdx = galleryItems.findIndex(
    (elem) => elem.preview === evt.target.src
  );
  bigImgRef.src = galleryItems[findIdx].original;
});

closeButtonRef.addEventListener("click", closeModal);
overlayRef.addEventListener("click", closeModal);

document.addEventListener("keydown", (evt) => {
  if (boxRef.classList.contains("is-open") === true) {
    if (evt.code === "Escape") {
      closeModal();
      console.log("hello");
    }
  }
});

document.addEventListener("keydown", (evt) => {
  const findIdx = galleryItems.findIndex(
    (elem) => elem.preview === evt.target.src
  );
  if (boxRef.classList.contains("is-open")) {
    if (evt.code === "ArrowLeft") {
      bigImgRef.src = galleryItems[0].original;
      // console.log(findIdx);
    }
  }
  // console.log(evt.target);
});
