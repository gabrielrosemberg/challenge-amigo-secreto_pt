let amigos = [];

function adicionarAmigo() {
  const amigoInput = document.getElementById("amigo");
  const amigoNome = amigoInput.value;

  if (amigoNome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  amigos.push(amigoNome);
  amigoInput.value = "";

  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  const li = document.createElement("li");
  li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
  resultado.appendChild(li);
}