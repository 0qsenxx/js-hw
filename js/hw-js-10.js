// #1
const numbers1 = [1, 2, 3];
numbers1.push(4, 5, 6);
console.log(numbers1);

// #2
const numbers2 = [1, 2, 3];
numbers2.unshift(4, 5, 6);
console.log(numbers2);

// #3
const text1 = ['js', 'css', 'jq'];
console.log(text1[0]);

// #4
const text2 = ['js', 'css', 'jq'];
const lastIndex = text2.length - 1;
console.log(text2[lastIndex]);
console.log(text2[text.length - 1]);

// #5
const numbers3 = [1, 2, 3, 4, 5].slice(0, 3);
console.log(numbers3);

// #6
const numbers4 = [1, 2, 3, 4, 5].slice(3);
console.log(numbers4);

// #7
const fruits = ['apple', 'grape', 'peach', 'orange'];
const fruitDelete = 'peach';
const indexFruitDelete = fruits.indexOf(fruitDelete);
fruits.pop();
fruits.shift();
fruits.push('cherry');
fruits.unshift('strawberry');
const deletedFruits = fruits.splice(indexFruitDelete, 1, 'guava', 'kiwi');
const message = `Наразі у вашому кошику ${fruits}, бажаєте оформити замовлення?`;
console.log(fruits);
console.log(message);

// #8
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
const changeStyle = styles.splice(1, 1, 'Класика');
const deleteStyle = styles.splice(0, 1);
styles.unshift('Реп', 'Реггі');
console.log(deleteStyle);
console.log(styles);