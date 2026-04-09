/* crie uma classe para representar pessoas, cada pessoa tem um nome, peso e altura.
Crie um método para calcular o IMC da pessoa (IMC = peso / (altura * altura)).
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC= peso / (altura * altura)).
*/
const prompt = require("prompt-sync")();

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura / 100; // converter cm para metros
    }

    calcularImc(peso, altura){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(imc){
        if(imc < 18.5){
            return "Abaixo do peso";
        } else if(imc >= 18.5 && imc < 25){
            return "Peso normal";
        } else if(imc >= 25 && imc < 30){
            return "Sobrepeso";
        } else {
            return "Obesidade";
        }
    }
}

//INPUT
const seuPeso = parseFloat(prompt("Digite o seu peso (KG) ao lado: "));
const suaAltura = parseFloat(prompt("Digite a sua altura (CM) ao lado: "));

//INSTANCIA
const davi = new Pessoas("Davi Matheus", seuPeso, suaAltura);

//SAÍDA
console.log(`Olá ${davi.nome}!, seu IMC final é: ${davi.calcularImc().toFixed(2)} e você está classificado como: ${davi.classificarImc(davi.calcularImc())}`);