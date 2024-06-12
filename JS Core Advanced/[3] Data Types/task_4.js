'use strict'

/* Напишите функцию, которая принимает число и выводит количество цифр в этом числе. */

// 1 вариант
function getNumberOfDigits(number) {
    let str;
    if (number >= 0)
        return String(number).length;
    else
        return String(number).length - 1;
}

// 2 вариант
function getNumberOfDigits2(number) {
    number = Math.abs(number)
    let count = 0;
    if (number == 0)
        return 1;
    else {
        while(number >= 1) {
            number = number / 10;
            count++;
        }
        return count;
    }
}

console.log(getNumberOfDigits(2024)); // вернет 4
console.log(getNumberOfDigits2(214)); // вернет 3