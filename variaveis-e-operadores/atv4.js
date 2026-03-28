/* Faca um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade. Calcule e imprima
a sua media e sua classificacao, conforme abaixo:
    - Media menor que 5 = reprovacao;
    - Media entre 5 e 7 = recuperacao;
    - Media acima de 7 = aprovacao;
*/

const prompt = require("prompt-sync")();

const nota1 = parseFloat(prompt("Digite sua 1º nota: "));
const nota2 = parseFloat(prompt("Digite sua 2º nota: "));
const nota3 = parseFloatx(prompt("Digite sua 3º nota: "));

const media = (nota1 + nota2 + nota3) / 3;

if(media > 7){
    console.log(`Media do Aluno: ${media} --- Aluno Aprovado.`);
}else if(media >= 5 && media < 7){
    console.log(`Media do aluno: ${media} --- Aluno em Recuperação.`);
}else{
    console.log(`Media do aluno: ${media} --- Aluno Reprovado.`);
};