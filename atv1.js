//ESTUDANDO UM POUCO SOBRE JAVASCRIPT!

const prompt = require("prompt-sync")();
let salario = Number(prompt("Digite o valor do salário: "));

if(salario >= 600 && salario <= 900){
    console.log("Seu salário é de menor aprendiz.");
}else if(salario <= 1500){
    console.log("Seu salário é de CLT comum.");
}else{
    console.log("Outro nível de salário");
};
