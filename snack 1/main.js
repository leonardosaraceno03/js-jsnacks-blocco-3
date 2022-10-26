

let array = [];


let somma = 0;

let numero = 0;

while (somma < 50){
    numero = parseInt(prompt("inserisci un numero"));
    somma += numero;
    if(somma < 50){
        array.push(numero)
    }
}


let lastItem=array[array.length-1];
 somma = somma - lastItem;
 console.log(somma)