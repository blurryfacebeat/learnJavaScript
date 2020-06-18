// Строки
// Поиск подстроки
// indexOf() - начинаю с pos ищет подстроку и возвращает позицию, на которой располагается совпадение, lastIndexOf() - делает то же самое, но ищет с конца
const str = 'Генадий Букин';
console.log(str.indexOf('ена'));
// Вернет -1, так как с 3 позиции нет совпадений
console.log(str.indexOf('ена', 3));
// includes() - возращает true, если подстрока есть в строке, иначе false, startsWith() и endsWith() - проверяют, начинается или заканчивается строка подстрокой
console.log(str.includes('ена'));
// Вернет false, так как поиск идет с 3 позиции
console.log(str.includes('ена', 3));
console.log(str.startsWith('Ген'));
console.log(str.endsWith('укин'));

// Получение подстроки
// slice(start, end), не включая end, если end нет, возвращает символы до конца строки, так же start и end могут быть отрицательны.
console.log(str.slice(0, 5));
// substring(start, end) - то же самое, что slice, но нельзя работать с отрицательными числами и end может быть больше start.
// substr(start, length) - возвращает символы от start длиной в length, значение start может быть отрицательным, чтобы определить позицию с конца.
console.log(str.substr(0, 3));

// Сравнение строк
// Возвращает код символа, находящегося на позиции
console.log(str.codePointAt(3));
// Создает символ по его коду
console.log(String.fromCodePoint(1072));

// Задачи
// 1) Сделать первый символ заглавным
function ucFirst(str) {
    if (!str || typeof str != 'string') return str;

    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('алеся'));
// 2) Проверка на спам, возвращает true, если в строке есть "viagra" или "XXX", а иначе false
function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) return true;
    return false;
}
console.log(checkSpam('viaGRa'));
// 3) Усечение строки. Если строка превосходить maxlength, то конец заменяется на ..., чтобы длина стала равна maxlength
function truncate(str, maxlength) {
    if (str.length > maxlength) return str.slice(0, maxlength) + '...';
    return str;
}
console.log(truncate('Олегпеченька', 11));
// 4) Выделить число
function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue('$130'));
