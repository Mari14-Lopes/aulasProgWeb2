document.addEventListener("DOMContentLoaded", criaBotao)
let tamanho = 2;

function criaBotao(){
    div = document.createElement("div");
    div.style.fontSize = `${tamanho}em`;
    div.innerHTML = `<button onclick="aumenta()"> + </button>
    <button onclick="diminui()"> - </button>`;
    document.body.prepend(div)
}

function tamanhoMudar() {
    const h1 = document.querySelector("h1");
    h1.style.fontSize = `${tamanho}em`;
}

function aumenta() {
    if (tamanho < 4) {
        tamanho += 0.5;
        tamanhoMudar();
    }
}

function diminui() {
    if (tamanho > 1) {
        tamanho -= 0.5;
        tamanhoMudar();
    }
}

	
