/* Escreva um programa no qual o usuário digite números para dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados. */

// Cria vetores e variáveis
let vetor1 = []
let vetor2 = []
let vetor3 = []
let numeroAdd

    // Cria um loop de 6 vezes
    for(i=0; i < 6; i++){

	// Recebe o número e armazena na variável
        numeroAdd = Number(prompt("Digite um número para o vetor 1: "))

        // Adiciona no vetor 1
        vetor1.push(numeroAdd)

        // Adiciona no vetor 3
        vetor3.push(numeroAdd)

	// Recebe o número e armazena na variável
        numeroAdd = Number(prompt("Digite um número para o vetor 2: "))
        
	// Adiciona no vetor 2
	vetor2.push(numeroAdd)

	// Adiciona no vetor 3
        vetor3.push(numeroAdd)

    }

// Mostra resultados
alert(`Vetor1: ${vetor1}\nVetor2: ${vetor2}\nVetor3: ${vetor3}`)

