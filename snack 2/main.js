let array = [];
// variabile somma
let sum = 0;
// indice per contare i giri
i = 0;
// ciclo per sommare
while(i < 5){
    let numero = parseInt(prompt("inserisci un numero"));
    sum = sum + numero;
    i++;
}
// stampa somma
console.log(sum)