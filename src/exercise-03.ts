// 3. Uma loja de eletrodomésticos estabeleceu as seguintes modalidades
// de pagamento para a venda de suas mercadorias:

// Escreva um algoritmo que armazene o preço de tabela e o número de
// vezes em que o pagamento será feito. Calcule o valor de cada parcela e o
// preço total da compra e imprima no console.

let preco    : number = 1500;
let parcelas : number = 12;


if(parcelas == 1){
    let desconto : number = preco * 2.5 / 100
    console.log(`O pagamento a vista, com desconto de 2,5%. Fica ${(preco - desconto).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}`)
} else if (parcelas >= 2 && parcelas <= 5){
    console.log(`O pagamento feito de duas até cinco parcelas é feito em valor integral de ${preco.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}`)
    console.log(`Cada parcela vai sair no valor de ${(preco / parcelas).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}`)
} else if (parcelas >= 6 && parcelas <= 10){
    let acrescimo : number = preco * 6 / 100
    console.log(`O pagamento a vista, com acrescimo de 6%. Fica ${(preco + acrescimo).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}`)
    console.log(`Cada parcela vai sair no valor de ${((preco + acrescimo) / parcelas).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}`)
} else if (parcelas >= 11 && parcelas <= 15){
    let acrescimo : number = preco * 13 / 100
    console.log(`O pagamento a vista, com acrescimo de 13%. Fica ${(preco + acrescimo).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}`)
    console.log(`Cada parcela vai sair no valor de ${((preco + acrescimo) / parcelas).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}`)
} else {
    console.log(`Quantidade de parcelas inválidas.`)
}