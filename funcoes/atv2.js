//funcao => pequeno trecho de codigo que podemos invocar sua execucao em qualquer momento, podendo ser utilizado varias vezes.

function contador (valor1, valor2){
    return valor1 + valor2;
}

const soma = contador(4,8); //declaramos a variavel fora da funcao, e assim, realizamos a sua invocacao.
console.log(soma);

function decretarJuros(valor, percentualjuros){
    return (percentualjuros / 100) * valor
}

const valorDeJuros = decretarJuros(500, 30);
console.log(valorDeJuros);

function main (){
    console.log("Executamos as funcoes aqui dentro da main");
    console.log("Assim, facilita na organização.");
    decretarJuros(500,30);

}