/* Criar um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números. */

// Cria variáveis
let numerosImpares = []
let numeroAdd
let somaImpares = 0

    // Cria um loop de 5 vezes	
    for(i=0; i < 5; i++){

	// Recebe o número e armazena
        numeroAdd = Number(prompt("Digite um número: "))
        
	// Verifica se o número é ímpar
        if(numeroAdd % 2 == 1){

	    // Adiciona o número no vetor de ímpares
            numerosImpares.push(numeroAdd)

	    // Atualiza a soma
            somaImpares += numeroAdd

        }
    
    }

    // Mostra resultados
    alert(`Números ímpares: ${numerosImpares}. Soma dos ímpares: ${somaImpares}.`)