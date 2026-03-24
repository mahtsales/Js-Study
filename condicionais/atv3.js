// Um pouco sobre boolean e condicionais

const prompt = require("prompt-sync")();

const alunoMatriculado = prompt("Você possui nº de matrícula?: ");
if(alunoMatriculado.toLowerCase() === "sim"){
    console.log("Aluno matriculado.");
}else{
    console.log("Aluno não matriculado.");
};
