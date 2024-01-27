const formRef = document.querySelector("#form");
const tableRef = document.querySelector("#table");
const backdropRef = document.querySelector(".backdrop");
const modalFormRef = document.querySelector("#modal__form");
const selectedCourseRef = document.getElementById("selectedCourse");
const selectVisitedCoursesRef = document.getElementById("selectVisitedCourses");

formRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const student = {
    name: e.target[0].value,
    surname: e.target[1].value,
    age: e.target[2].value,
    course: selectedCourseRef.value,
    visitCourses: selectVisitedCoursesRef.value,
  };

  let arr = [];
  if (localStorage.getItem("studentsList")) {
    arr = JSON.parse(localStorage.getItem("studentsList"));
  }
  arr.push(student);
  localStorage.setItem("studentsList", JSON.stringify(arr));

  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${student.name}</td>
    <td>${student.surname}</td>
    <td>${student.age}</td>
    <td>${student.course}</td>
    <td>${student.visitCourses}</td>`;
  tableRef.append(tr);
  formRef.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
  // formRef.querySelectorAll("select").forEach((select) => {
  //   select.value = 0;
  // });
});
// localStorage.clear();

document.addEventListener("DOMContentLoaded", () => {
  const localStorageContent = JSON.parse(localStorage.getItem("studentsList"));
  if (localStorageContent !== null) {
    localStorageContent.forEach((elem) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${elem.name}</td>
      <td>${elem.surname}</td>
      <td>${elem.age}</td>
      <td>${elem.course}</td>
      <td>${elem.visitCourses}</td>`;
      tableRef.append(tr);
    });
  }
});

document.querySelector(".change__data").addEventListener("click", () => {
  backdropRef.classList.toggle("is-hidden");
});

document.querySelector(".close-modal__button").addEventListener("click", () => {
  backdropRef.classList.toggle("is-hidden");
});

document.querySelector(".user-number").addEventListener("input", (e) => {
  const inputData = Number(e.target.value) - 1;
  const localStorageData = JSON.parse(localStorage.getItem("studentsList"));
  // console.log(modalFormRef.children);
  modalFormRef.children[0].value = localStorageData[inputData].name;
  modalFormRef.children[1].value = localStorageData[inputData].surname;
  modalFormRef.children[2].value = localStorageData[inputData].age;
  modalFormRef.children[4].value = localStorageData[inputData].course;
  modalFormRef.children[5].value = localStorageData[inputData].visitCourses;
});
console.log(modalFormRef.children);

modalFormRef.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedCourseRef = document.getElementById("selectedCourse");
  // const selectedCourseText =
  //   selectedCourseRef.options[selectedCourseRef.selectedIndex].text;
  const selectVisitedCoursesRef = document.getElementById(
    "selectVisitedCourses"
  );

  const student = {
    name: e.target[0].value,
    surname: e.target[1].value,
    age: e.target[2].value,
    course: selectedCourseRef.value,
    visitCourses: selectVisitedCoursesRef.value,
  };
  // console.log(student.name);
  const inputData = Number(e.target.value) - 1;
  const localStorageData = JSON.parse(localStorage.getItem("studentsList"));
  localStorageData.splice(inputData, 1, student);
  localStorage.setItem("studentsList", JSON.stringify(localStorageData));
});
// localStorage.clear();
