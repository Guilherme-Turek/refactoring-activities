// Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.

let x   : number = 0;
let num : number = 10;

do {
    x = x + num;
    num++
} while (num <= 100);

console.log(x)