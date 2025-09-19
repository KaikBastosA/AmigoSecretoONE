let amigos = [];

function adicionarAmigo() {
    const campoAmigo = document.getElementById('amigo');
    const nomeAmigo = campoAmigo.value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    campoAmigo.value = '';
    campoAmigo.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio.');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto é: ${amigoSecreto}`;
    amigos = [];
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}
