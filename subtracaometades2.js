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

	// Verifica se a passado do loop é menor que 5
        if(i < 5){

	    // Realiza a soma
            somaMetade1 += numeros[i]

	// Se a passado do loop for 5 ou maior
        }else{

	    // Realiza a soma
            somaMetade2 += numeros[i]

        }

    }

// Mostra o resultado
alert(`Subtração das metades: ${somaMetade1 - somaMetade2}.`)