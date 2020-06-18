// Числа
const billion = 1e9;
console.log(billion);
const a = 11e-6;
console.log(a);
console.log(0xff);
// Вывод числа в шестнадцатеричной и двоичной формах счисления
const b = 255;
console.log(b.toString(16));
console.log(b.toString(2));
// Вызов непосредственно для числа осуществляется через 2 точки
console.log(255..toString(2));
// Округление
/* 
    Math.floor() - округляет в меньшую сторону;
    Math.ceil() - округляет в большую сторону;
    Math.round() - округляет до ближайшего целого;
    Math.trunc() - производит удаление дробной части без округления.

    toFixed(n) - округляет до n знаков после запятой. 
*/
// Другие математические операции
/*
    Math.max(a, b...) - возвращает максимальное из чисел;
    Math.min(a, b...) - возвращает минимальное из чисел;
    Math.pow(a, n) - возводит a в степень n.
*/
// Функция для получения рандомного числа
function random(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(random(1, 3));
