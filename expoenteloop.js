/* Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **). */

// Cria variáveis e inicializa com valores 
let base, expoente
let resultado = 1

    // Recebe dados digitados pelo usuário
    base = Number(prompt("Digite um número: "))
    expoente = Number(prompt("Digite o seu expoente: "))

    // Cria um loop utilizando o expoente como condicional
    for(i=0; i < expoente; i++){

        // Calcula o resultado
        resultado *= base 

    }

// Mostra o resultado na tela
alert(`Resultado: ${resultado}`)