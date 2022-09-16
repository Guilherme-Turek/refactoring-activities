"use strict";
// 9. Reescreva o exercício 3, utilizando apenas o SWITCH.
let price = 1500;
let parcela = 12;
switch (parcela) {
    case 1:
        let desconto = 1500 / 100 * 2.5;
        console.log(`O pagamento a vista, com desconto de 2,5%. Fica ${(price - desconto).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`O pagamento feito de duas até cinco parcelas é feito em valor integral de ${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
        console.log(`Cada parcela vai sair no valor de ${(price / parcela).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 6:
    case 8:
    case 9:
    case 10:
        let acresc = 1500 / 100 * 6;
        console.log(`O pagamento a vista, com acrescimo de 6%. Fica ${(price + acresc).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
        console.log(`Cada parcela vai sair no valor de ${((price + acresc) / parcela).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        let acrescimo = 1500 / 100 * 15;
        console.log(`O pagamento a vista, com acrescimo de 15%. Fica ${(price + acrescimo).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
        console.log(`Cada parcela vai sair no valor de ${((price + acrescimo) / parcela).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);
        break;
    default:
        console.log(`Quantidade de parcelas inválidas.`);
}
;
