const criarTarefa = (evento) => {

	evento.preventDefault()	

	const lista = document.querySelector('[data-list]')
	const input = document.querySelector('[data-form-input]')	
	const valor = input.value
	
	const tarefa = document.createElement('li')
	tarefa.classList.add('task')

	const conteudo = `<p class="content">${valor}</p>`  //tamplate String

	tarefa.innerHTML = conteudo

	tarefa.appendChild(BotaoConclui())  //adcionando botão
	lista.appendChild(tarefa)  //hierarquia

	input.value = " "  //limpar input
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

const BotaoConclui = () => {
	const BotaoConclui = document.createElement('button') //criando botão
	
	BotaoConclui.classList.add('check-button') //texto do botão
	BotaoConclui.innerText = 'concluir'   //texto do botão
	BotaoConclui.addEventListener('click', () => {
		console.log('Fui clicado')  
	})

	return BotaoConclui
}
