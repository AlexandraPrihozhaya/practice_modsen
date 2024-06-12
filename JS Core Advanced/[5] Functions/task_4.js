'use strict'

/* Напишите функцию, которая генерирует идентификатор строки (указанной длины) из случайных символов */

function generateIdentifierOfString(numberOfSymbols) {
    let result = '';
    let count = 0;
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    while (count < numberOfSymbols) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
        count++;
    }
    return result;
}

console.log(generateIdentifierOfString(10))