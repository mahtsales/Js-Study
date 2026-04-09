/*
    1 - Crie uma classe para representar carros.
    Os carros possuem um marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

//classe criada para representar 'Carros'
const prompt = require ('prompt-sync')();
class Carros { 
    modelo;
    cor;        //variaveis dentro de classes => sao denominadas atributos
    gastoMedio;
    
    constructor(modelo, cor, gastoMedio) {
        this.modelo = modelo; // modelo seria um atributo do carro 
        this.cor = cor; // cor seria um atributo do carro
        this.gastoMedio = gastoMedio; //gasto seria um atributo do carro
    }

    calcularGasto(distancia, precoCombustivel) { //funcoes deve receber dados, não perguntar dados
        return distancia * this.gastoMedio * precoCombustivel;
    }
};

//INPUT -(Fora da classe)
const gastoMedio = parseFloat(prompt('Digite o gasto médio do carro por KM: '));
const distancia = parseFloat(prompt('Digite a distância a ser percorrida em KM: '));
const precoCombustivel = parseFloat(prompt('Digite o preço do combustível por litro: '));

//INSTANCIA 
const uno = new Carros('Fiat', 'Vermelho', 1/12); // => a cada 1L o carro percorre 12KM, ou seja, o gasto médio é de 1/12 L por KM
const palio = new Carros('Fiat', 'Preto', 1/10); // => a cada 1L o carro percorre 10KM, ou seja, o gasto médio é de 1/10 L por KM

//SAÍDA
console.log(`O gasto médio por total para percorrer ${distancia} KM é de R$ ${uno.calcularGasto(distancia, precoCombustivel).toFixed(2)}`);
console.log(`O gasto médio por total para percorrer ${distancia} KM é de R$ ${palio.calcularGasto(distancia, precoCombustivel).toFixed(2)}`);
