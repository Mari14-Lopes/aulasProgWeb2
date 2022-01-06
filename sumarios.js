const subtitulos = document.querySelectorAll('h2'); //inserindo todos os elementos <h2> em uma array(subtitulos)
const topicos = new Array(); //criando novo array para os topicos
//percorrendo todos os subtitulos / todos elementos de um array com o forEach
subtitulos.forEach(subtitulo => {
	topicos.push(subtitulo.textContent); //colocando dentro de topicos os textos que estao dentro de subtitulos
	
	//transformando em link
	const ancora = document.createElement('a');
	ancora.setAttribute('name', subtitulo.textContent);
	subtitulo.append(ancora); 
	
	const retorno = document.createElement('a');
	retorno.setAttribute('href', '#');
	retorno.textContent = 'Voltar';
	subtitulo.parentElement.insertBefore(retorno, subtitulo.nextElementSibling);
}); 

// inserindo percorrendo os topicos em uma lista ordenada 
const lista = document.querySelector('ol');
topicos.forEach(topico => {
	//escrevendo o que acontece para cada elemento
	const item = document.createElement('li'); //criando um elemento li
	const link = document.createElement('a');
	lista.append(item); // inserindo o item com o texto daquele topico dentro da lista 
	item.append(link);
	link.setAttribute('href', `#${topico}`);
	link.textContent = topico;
});

