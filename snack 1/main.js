

let array = [];


let somma = 0;

let numero = 0;
// ciclo per inserire numeri nell'array
while (somma < 50){
    numero = parseInt(prompt("inserisci un numero"));
    somma += numero;
    array.push(numero)
    
}

// stampa somma < 50
let lastItem=array[array.length-1];
 somma = somma - lastItem;
 console.log(somma)