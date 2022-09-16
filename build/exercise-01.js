"use strict";
// 1. Crie um algoritmo que armazene três valores, para cada um dos lados
// de um triângulo: A, B e C. Verifique se os lados fornecidos formam
// realmente um triângulo. Se formar, deve mostrar no console o tipo de
// triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);
const A = 3;
const B = 3;
const C = 4;
if (A < B + C && B < A + C && C < A + B) {
    if (A == B && B == C) {
        console.log(`É um triângulo do tipo equilátero`);
    }
    else if (A == B || A == C || B == C) {
        console.log(`É um triângulo do tipo isóceles`);
    }
    else if (A != B && A != C && B != C) {
        console.log(`É um triângulo do tipo escaleno`);
    }
    ;
}
else {
    console.log(`Não é um triângulo`);
}
;
