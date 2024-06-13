'use strict'

/* Используя Promise, выведите числа от 1 до 10 через секунду каждый раз. Ограничения: setTimeout и new Promise() мы
можно вызывать только один раз */

function printNumbers() {
    return new Promise((resolve) => {
      let count = 1;
      const interval = setInterval(() => {
        console.log(count);
        count++;
        if (count > 10) {
          clearInterval(interval);
          resolve();
        }
      }, 1000);
    });
  }
  
  printNumbers();