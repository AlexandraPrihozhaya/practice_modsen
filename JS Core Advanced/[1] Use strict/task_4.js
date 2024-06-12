'use strict'

/* Напишите функцию, которая принимает массив и возвращает true, если в массиве есть дубликаты, и false, если нет.
Используйте строгий режим */

// 1 вариант
function isContainsDuplicates(array) {
    let count;
    let max = 1;
    for(let i = 0; i < array.length; i++) {
        count = 0;
        for(let j = 0; j < array.length; j++) {
            if(array[i] == array[j]) {
                count++;
            }
        }
        
        if (count > max)
            max = count
    }

    if (max == 1)
        return false;
    else
        return true;
}

// 2 вариант
function isContainsDuplicates2(array) {
    return new Set(array).size != array.length;
}

console.log(isContainsDuplicates([2, 5, 3, 8, 4, 6])) // false
console.log(isContainsDuplicates2(['d', 'h', 'a', 'd'])) // true