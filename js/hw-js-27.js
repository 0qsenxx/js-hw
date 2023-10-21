// !1
const openModalBtnRef = document.querySelector('[data-action="open-modal"]');
const backdropRef = document.querySelector(".backdrop");
const closeModalBtnRef = document.querySelector('[data-action="close-modal"]');

openModalBtnRef.addEventListener("click", () => {
  document.body.classList.toggle("show-modal");
});
closeModalBtnRef.addEventListener("click", (e) => {
  document.body.classList.toggle("show-modal");
});

// !2
backdropRef.addEventListener("click", (e) => {
  if (!e.target.dataset.action) {
    document.body.classList.toggle("show-modal");
  }
});

// !3
const inputRadioRedRef = document.querySelector("input[value=red]");
const inputRadioWhiteRef = document.querySelector("input[value=white]");
const inputRadioGreenRef = document.querySelector("input[value=green]");

inputRadioRedRef.addEventListener("change", () => {
  document.body.style.backgroundColor = "red";
});

inputRadioWhiteRef.addEventListener("change", () => {
  document.body.style.backgroundColor = "white";
});

inputRadioGreenRef.addEventListener("change", () => {
  document.body.style.backgroundColor = "green";
});

// !4
const inputNameRef = document.getElementById("name-input");
const textNameRef = document.getElementById("name-output");

// ? Перший спосіб
// inputNameRef.addEventListener("input", () => {
//   if (inputNameRef.value === "") {
//     textNameRef.textContent = "Незнайомець";
//     return;
//   } else {
//     textNameRef.textContent = inputNameRef.value;
//   }
// });

// ? Другий спосіб
inputNameRef.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    textNameRef.textContent = "Незнайомець";
    return;
  } else {
    textNameRef.textContent = e.currentTarget.value;
  }
});

// !5
const validationInputRef = document.querySelector('[data-length="6"]');

// ? Перший спосіб
// validationInputRef.addEventListener("blur", () => {
//   if (validationInputRef.value.length === 6) {
//     validationInputRef.classList.remove("invalid");
//     validationInputRef.classList.add("valid");
//   } else {
//     validationInputRef.classList.remove("valid");
//     validationInputRef.classList.add("invalid");
//   }
// });

// ? Другий спосіб
validationInputRef.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length === 6) {
    e.currentTarget.classList.remove("invalid");
    e.currentTarget.classList.add("valid");
  } else {
    e.currentTarget.classList.remove("valid");
    e.currentTarget.classList.add("invalid");
  }
});

// !6
const inputRangeRef = document.getElementById("font-size-control");
const inputRangeTextRef = document.getElementById("text");

// ? Перший спосіб
// inputRangeRef.addEventListener("input", () => {
//   inputRangeTextRef.style.fontSize = inputRangeRef.value + 'px';
// });

// ? Другий спосіб
inputRangeRef.addEventListener("input", (e) => {
  inputRangeTextRef.style.fontSize = e.currentTarget.value + "px";
});
