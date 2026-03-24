// Um pouco sobre boolean e condicionais

const prompt = require("prompt-sync")();

const alunoMatriculado = prompt("Você possui nº de matrícula?: ");
if(alunoMatriculado.toLowerCase() === "sim"){
    console.log("Aluno matriculado.");
}else if (alunoMatriculado.toLowerCase() === "não"){
    console.log("Aluno não matriculado.");
}else{
    console.log("Nome não correspondente.");
};

