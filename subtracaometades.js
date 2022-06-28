/* Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final mostre o valor que resulta do somatório da primeira metade dos números menos o somatório da segunda metade. */

// Cria vetor e variáveis
let numeros = []
let numeroAdd
let somaMetade1 = 0
let somaMetade2 = 0

    // Cria um loop de 10 vezes	
    for(i=0; i < 10; i++){

	// Recebe os números e armazena em uma variável
        numeroAdd = Number(prompt("Digite um número: "))

	// Adiciona o número em um vetor
        numeros.push(numeroAdd)

    }

    // Percorre o vetor do índice 0 ao 4
    for(i=0; i < 5; i++){

	// Realiza a soma
        somaMetade1 += numeros[i]

    }
	
    // Percorre o vetor do índice 5 ao 9
    for(i=5; i < 10; i++){

	// Realiza a soma
        somaMetade2 += numeros[i]

    }

// Mostra o resultado
alert(`Subtração das metades: ${somaMetade1 - somaMetade2}.`)



