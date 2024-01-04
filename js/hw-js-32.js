const btnRef = document.getElementById('hw32btn');
const titleRef = document.querySelector('h1');
const subtitleRef = document.querySelector('h2');

function clickBtn() {
    titleRef.style.color = 'red';
    subtitleRef.style.color = 'blue';
};

btnRef.addEventListener('click', clickBtn);

