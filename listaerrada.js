/* Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. Desenvolver um programa que remova os números a mais para corrigi-la. Mostrar a lista corrigida na tela. */

// Cria um vetor com números
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// lista.length = 5

    // Cria um loop de 10 vezes
    for(i=0; i < 10; i++){

	// Remove o último elemento do vetor
        lista.pop()

    }

// Mostra a lista sem os 10 números que foram removidos
alert(lista)
