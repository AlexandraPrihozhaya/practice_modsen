'use strict'

/* Напишите функцию для расчета факториала числа. Функция должна принимать число вкачестве аргумента и возвращать его
факториал. Учтите использование строгого режима */

function factorial(n) {
    if (n == 0)
        return 1;
    else 
        return n * factorial(n - 1);
}

console.log(factorial(7))