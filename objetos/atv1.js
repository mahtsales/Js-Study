const davi = {
    nome: "Davi",
    idade: 21,
    profissao: "Programador",
    hobbies: ["jogar", "ler", "viajar"],
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

console.log(davi.nome);
davi.saudacao();