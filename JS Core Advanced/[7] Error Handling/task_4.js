'use strict'

/* Напишите функцию, которая принимает массив в качестве параметра и выдает пользовательскую ошибку, если массив пуст */

class ArrayIsEmptyError extends Error {
    constructor(message) {
        super(message);
        this.name = "ArrayIsEmptyError";
    }
}

function errorHandling(arr) {
    if (arr.length == 0)
        throw new ArrayIsEmptyError("Your array is empty");
}

errorHandling([]);