//criando funcao 'teste' => dentro dela, possui o codigo 'console.log();' => executo a funcao chamando 'teste();'
const prompt = require("prompt-async")();

function teste (){
    console.log('hello, guys!');
};

teste();

//chamamos de funcao de procedimento => funcoes que nao sao chamadas, apenas utilizadas para realizar um comando e encerrarem.
function sayMyName(valor){
    
        console.log(`Hi ${name}! You're welcome!.`);
}

sayMyName();