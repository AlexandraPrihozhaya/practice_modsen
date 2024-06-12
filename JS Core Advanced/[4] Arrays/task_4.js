'use strict'

/* Напишите функцию, которая принимает массив с числами и находит сумму тех элементов этого массива, которые больше
нуля и меньше десяти */

function findSumOfElements(arr) {
    let sum = 0;
    for(let item of arr) 
        if (item > 0 && item < 10)
            sum += item;
    return sum;
}

console.log(findSumOfElements([3, 8, 4, 10, 11, -3, -6, 20])); // вернет 15