const prompt = require("prompt-sync")()
const corretora = require()
const db = []

let ultimoId = 0;

function getIndice(id) {
    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
        return indice;
    } else {
        console.log("ID Inexistente")
    } 
}

function modelo(id = ++ultimoId ) {
    const nome = prompt("Digite o nome ");

    if(nome != "") {
        return {
            id,
            nome
        }
    }
    console.log("Dados Inválidos")
    ultimoId--
}

function criar() {
    const novo = modelo();

    if(novo) {
        db.push(novo);
    console.log("Registro criado com sucesso")
    }
}

function listar() {
    if(db.length == 0) {
        console.log("Nenhum registro foi encontrado");
        return false
    }

    db.forEach(el => console.log(el))
    return true
}

function atualizar() {
    if(listar()) {
        const id = prompt("Digite o ID: ")

        const indice = getIndice(id)

        if(indice > -1) {
            const novo = modelo(id)

            if(novo) {
                db[indice] = novo
                console.log("atualizado com sucesso")

            }
            }
        }
    }

    function remover() {
        if(listar()) {
            const id = prompt ("Digiteo ID: ")

            const indice = getIndice(id);

            if(indice) {
                db.splice(indice, 1)
                console.log("Removido com sucesso")
            }
        }
    }

    module.exports = {
        criar,
        atualizar,
        listar,
        remover
    }
