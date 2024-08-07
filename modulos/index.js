const prompt = require('prompt-sync')()

const { criar, listar, atualizar, remover} = require('./modulos/corretora.js')

while (true) {
    console.log(`
        O que deseja gerenciar?
        1 - Corretora
        0 - Sair
        `);

    const opcao = parseInt(prompt("Escolha uma opção acima: "));

    switch (opcao) {
    case 1:
        let continuar = true;
        while (continuar) {
            
        console.log(`
        GERENCIMAENTO DE CORRETORA

        1 - Criar
        2 - Listar 
        3 - Atualizar 
        4 - Remover
        5 - Sair
        `)

        const opcaoServico = prompt()

        switch (opcaoServico) {
            case 1: 
                corretora.criar()
            break
            case 2:
                corretora.listar()
                break;
            case 3:
                corretora.atualizar()
                break;
            case 4:
                corretora.remover()
                break;
            case 5:
                continuar = false
                break;
            default:
                console.log("Opção inválida")
                break;
            }
        }
    }
}
