// 7. Para o mesmo exercício acima insira mais uma variável a condicional,
// além de saber se o motorista tem 18 anos ou mais, temos que saber
// também se ele é habilitado para dirigir. Caso ele tenha idade maior ou
// igual a 18 anos e possua habilitação, imprima no console “Pode dirigir”
// caso contrário imprima “Não pode dirigir”.

const age         : number = 20;
const habilitacao : boolean = false

if(age >= 18){
    habilitacao ? console.log(`Pode dirigir`) : console.log(`Não pode dirigir`)
} else {
    console.log('Não pode dirigir')
}