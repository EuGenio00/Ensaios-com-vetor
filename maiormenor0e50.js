/* Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.*/

// Cria variáveis e inicializa com valores
let numeroDigitado
let maior = 0
let menor = 50

    // Realiza um loop de 10 vezes
    for(i=0; i < 10; i++){

        // Recebe o número digitado e armazena
        numeroDigitado = Number(prompt(`Digite o ${i+1}º número: `))

        // Verifica se o número digitado está entre 0 e 50
        if(numeroDigitado >=0 && numeroDigitado <=50){

            // Verifica se o número digitado é menor
            if(numeroDigitado <= menor){

                // Caso seja, atualiza o valor
                menor = numeroDigitado
 
            }

            // Verifica se o número digitado é maior
            if(numeroDigitado >= maior){

                // Caso seja, atualiza o valor
                maior = numeroDigitado

            }
        }
    }

// Mostra na tela o maior e o menor número digitados entre 0 e 50
alert(`O maior número digitado é ${maior} e o menor número digitado é ${menor}.`)