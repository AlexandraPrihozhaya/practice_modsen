'use strict'

/* Создайте функцию и внутри неё объявите переменные с использованием var, let и const. Попробуйте обратиться к этим
переменным вне функции. Какие переменные будут видны снаружи функции, а какие нет? */

function myFunction() {
    var variable_var = 5;
    let variable_let = 7;
    const variable_const = 2;
}

// все переменные не видны снаружи функции, выдаст ошибку
console.log(variable_var)
console.log(variable_let)
console.log(variable_const)