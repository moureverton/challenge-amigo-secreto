let listaAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
    inputAmigo.focus();
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "X";
        btnRemover.classList.add("remove-button");
        btnRemover.onclick = () => removerAmigo(i);

        li.appendChild(btnRemover);
        ul.appendChild(li);
    }
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎊 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong> 🎊</li>`;
}
