/* Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”. */

// Cria variáveis e inicializa com valores 
let quantidadeMultas
let valorMulta, pontosMulta
let valorTotal = 0, pontosTotal = 0

    // Pergunta a quantidade de multas a serem cadastradas
    quantidadeMultas = Number(prompt("Quantas multas? "))

    // Cria um loop com a quantidade digitada acima
    for(i=0; i < quantidadeMultas; i++){

        // Recebe os dados de valor e pontos digitados pelo usuário
        valorMulta = Number(prompt("Valor da multa? "))
        pontosMulta = Number(prompt("Pontos da multa? "))

        // Atualiza as soma de valor e de pontos
        valorTotal += valorMulta
        pontosTotal += pontosMulta

    }

    // Verifica se os pontos não atingiram 21
    if(pontosTotal < 21){

        // Mostra pontos e mensagem de regular
        alert(`Total: ${valorTotal}\nPontos: ${pontosTotal}\n\nREGULAR! :D`)

    // Senão
    }else{

        // Mostra pontos e mensagem de irregular
        alert(`Total: ${valorTotal}\nPontos: ${pontosTotal}\n\nIRREGULAR! :(`)

    }