'use strict'

/* Напишите функцию, которая конвертирует функцию, основанную на callbacks, в функцию, основанную на Promises */

function convertToPromise(func) {
    return new Promise((resolve, reject) => {
        func((result) => {
            resolve(result);
        }, (error) => {
            reject(error);
        });
    });
}