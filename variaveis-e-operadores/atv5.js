/* IMC - Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condicão de acordo com a tabela abaixo:

IMC em adultos:
- Abaixo de 18,5: Abaixo do peso
- Entre 18,5 e 24,9: Peso normal
- Entre 25 e 29,9: Acima do peso
- Entre 30 e 34,9: Obesidade grau I
- Entre 35 e 39,9: Obesidade grau II
- Acima de 40: Obesidade grau III */

const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Digite o seu peso (KG) ao lado: "));
let altura = parseFloat(prompt("Digite sua altura (CM) ao lado: "));

let imc = peso / Math.pow(altura,2);

if (imc <= 18.5){
    console.log(`Você pesa ${peso}kg, seu imc é de ${imc.toFixed(2)} e está abaixo do peso, mediante a tabela IMC.`);
}else if (imc > 18.5 && imc <= 25.9){
    console.log(`Você pesa ${peso}kg, seu imc é de ${imc.toFixed(2)} e está com o peso normal, mediante a tabela IMC.`);
} else if (imc >= 26 && imc <= 34.9){
    console.log(`Você pesa ${peso}kg, seu imc é de ${imc.toFixed(2)} e está com Obesidade grau I, mediante a tabela IMC. `);
} else{
    console.log(`Você pesa ${peso}kg, seu imc é de ${imc.toFixed(2)} e está em Obesidade grau II ou +.`);
}