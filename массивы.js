// Массивы
let people = [
    'Олег', 
    'Маша'
];
console.log(people);
// Push - добавляет элемент в конец, pop - удаляет элемент в конце
// Unshift - добавляет элемент в начало массива, shift - удаляет элемент из начала массива
// Перебор массива можно делать как for..of, так и key..in, но последний плох для массивов, так как сделан под объекты и работает медленно
// String вернет элементы массива через запятую
let nums = [1, 2, 3];
console.log(String(people));
console.log(String(nums));
// Задачи
// 1) 
/* Давайте произведём 5 операций с массивом.
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива. */
const styles = ['Джаз', 'Блюз'];

function rebuildStyles(arr) {
    arr.push('Рок-н-ролл');
    styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
    console.log(styles.shift());
    styles.unshift('Рэп', 'Регги');
    return arr;
}

console.log(rebuildStyles(styles));

// 2) 
// function sumInput() {
//     let numbers = [];

//     while(true) {
//         const value = prompt('Введите число', 0);

//         if (value === '' || value === null || !isFinite(value)) break;

//         numbers.push(+value);
//     }

//     let sum = 0;
//     for (let num of numbers) {
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumInput());

// 3)
const arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
}

console.log(getMaxSubSum(arr));
