const prompt = require ("prompt-sync")();

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = parseFloat(prompt("Digite o preço da peça: "));
const metodoPagamento = Number(prompt("Digite o método de pagamento: "));

/*
1 - À vista débtio, recebe 10% de desconto;
2 - À vista dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta;
4 - 2x no cartão de crédito, juros de 10% em cima do valor;
*/

if(metodoPagamento === 1){
    console.log("O valor será de: R$",aplicarDesconto(precoEtiqueta, 10));
}else if (metodoPagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if (metodoPagamento === 3){
    console.log(precoEtiqueta);
}else if (metodoPagamento === 4){
    console.log(aplicarJuros(precoEtiqueta, 10));
}else{
    console.log("Método de pagamento inválido");
}








