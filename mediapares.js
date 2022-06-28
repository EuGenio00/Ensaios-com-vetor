/* Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”. */

// Cria variáveis e inicializa com valores 
let numero, media
let soma = 0
let impar = false

    // Cria um loop de 5 vezes
    for(i=0; i < 5; i++){

        // Recebe um número
        numero = Number(prompt("Digite um número: "))
        
        // Atualiza a soma dos números
        soma = soma + numero

        // Verifica se o número da vez é ímpar
        if(numero % 2 == 1){

            // Se for ímpar troca variável de flag para indicar
            impar = true

        }

    }

    // Calcula a média
    media = (soma / 5).toFixed(2)

    // Se ímpar for verdadeiro
    if(impar){
    
        // Mostra mensagem avisando e não mostra a média
        alert("Um dos números digitados era ímpar!")

    // Senão
    }else{

        // Mostra mensagem com a média
        alert(`Média dos numeros pares: ${media}`)

    }

    