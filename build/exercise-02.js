"use strict";
// 2. Escreva um algoritmo que armazene o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e escrever
// o percentual que cada um representa em relação ao total de eleitores. O
// algoritmo deve fazer uma validação para que as porcentagens dos votos
// armazenados (brancos, nulos e válidos) respeitem o limite do número
// total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e
// válidos não seja maior que o número total de eleitores.
let total = 1000;
let brancos = 100;
let nulos = 130;
let validos = total - (brancos + nulos);
if (total < (brancos + nulos + validos)) {
    console.log(`Contagem inválida`);
}
else {
    let porcentagemBrancos = brancos / total * 100;
    let porcentagemNulos = nulos / total * 100;
    let porcentagemValidos = validos / total * 100;
    console.log(`Os votos brancos representam ${porcentagemBrancos}% dos votos.`);
    console.log(`Os votos nulos representam ${porcentagemNulos}% dos votos.`);
    console.log(`Os votos válidos representam ${porcentagemValidos}% dos votos.`);
}
;
