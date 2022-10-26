

let array = [];


let somma = 0;



while (somma < 50){
    let numero = parseInt(prompt("inserisci un numero"));
    somma += numero;
    array.push(numero)
}
console.log(array)

console.log(`la somma è ${somma}`)
  