// Importando do módulo do node para tratamento de arquivo
const { log } = require("console")
const fs = require("fs")

// Buscar o arquivo teste.txt e mostrar oque tem nele
fs.readFile("teste.txt", "utf-8", (erro,dados) => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log(dados);
    }
})

// Monstra as informações passadas no terminal
console.log(process.argv.slice(2))

// Guardando as informações em uma variavel e printa na tela
const argumentos = process.argv.slice(2)
console.log(argumentos);

// Função de criar um arquivo txt com o nome "teste2oretorno"
fs.writeFile("teste2oretorno.txt", argumentos.toString(), "utf-8", (erro) => {
    if(erro){
        console.log("Se vira ai pra consertar");
    }
    else{
        console.log("Arquivo criado com sucesso :>");
    }
})