let n = parseInt(prompt ("Inserisci un numero") );
let i = parseInt(0);

while( i < n ){
    // console.log(`il numero del ciclo è : ${n}`)
    let array = [];
    while(array.length < 10){
        let randomNumber = Math.floor ( Math.random()*100);
        array.push(randomNumber);
    }
    console.log(array);
    i++;
}
