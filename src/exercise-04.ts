// 4. Escrever um algoritmo que calcule e mostre a média aritmética dos
// números lidos entre 13 e 73.

let index : number
let soma  : number = 0

for (index = 13; index <= 73 ; index++) {
    soma = soma += index
};
console.log(soma)    
console.log(`A média da soma dos números entre 13 e 73 é igual a ${(soma / 60).toFixed(2)}`);