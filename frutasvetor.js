/* Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de cada fruta). */

// Cria vetores e variáveis
let frutas = []
let frutaAdd = ''

    // Cria condição para repetição
    while(frutaAdd != 'cereja'){

	// Recebe o nome da fruta digitada e armazena
        frutaAdd = prompt("Digite uma fruta: ")

	// Transforma em letra minúscula
        frutaAdd = frutaAdd.toLowerCase()

	// Adiciona fruta no vetor
        frutas.push(frutaAdd)

    }

    // Mostra lista de frutas 
    alert(`Lista das frutas: ${frutas}.`)