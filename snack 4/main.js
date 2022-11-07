let names = ['andrea', 'marco', 'pippo'];
let name = prompt('Inserisci il nome');
let i = 0; 
let statoNome = false;
while(i < names.length ){
    if ( name == names[i] ){
        statoNome = true;
    }
    i++;
   

    if(statoNome){
        console.log('sei invitato')
    }else{
        console.log('iscriviti')
    }
}