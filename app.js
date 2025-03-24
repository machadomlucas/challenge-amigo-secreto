let amigos = [];

function adicionarAmigo(nome) {
    
    nome = document.getElementById('amigo').value;

    if (nome != '') {
        amigos.push(nome);
        exibirLista();
        limparCampo();
        alert('Amigo adicionado com sucesso!');
    } else {
        alert('Por favor, insira um nome.');
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, adicione mais amigos para sortear.');
        return;
    } else {
        let indice = Math.floor(Math.random() * amigos.length)
        let amigoSorteado = amigos[indice];
        return exibirTextoNaTela('resultado', `O amigo sorteado foi: ${amigoSorteado}!`);
    }
    
    
}

function exibirLista() {
    limparLista();
    listaDeNomes = document.getElementById('listaAmigos');

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaDeNomes.appendChild(item);
    }
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function limparLista() {
    listaDeNomes = document.getElementById('listaAmigos');
    listaDeNomes.innerHTML = '';
}

function exibirTextoNaTela (tagId, texto) {
    let campo = document.getElementById(tagId);
    campo.innerHTML = texto;
}