document.querySelector("#DDD").addEventListener("change",procurar)

function procurar(evento){
    fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
    .then(resposta => resposta.json())
    .then(dados => {
        todasCidades(dados.cities)
    });
}

function todasCidades(cidades){
	const tamanho = cidades.length;
	const lista = document.querySelector("ul");
	lista.innerHTML = "<ul></ul>";
	for(let i = 0; i < tamanho; i++){
		item = document.createElement("li");
		item.textContent = cidades[i];
		lista.append(item);
	}
}
