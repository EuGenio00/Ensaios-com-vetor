/* O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal. */

// Cria variáveis e inicializa com valores 
let base = 5360
let topo = 8848
let alturaRestante = topo - base // altura restante 3488m
let alturaDia = 0
let diasPercorridos = 0

    // Cria condicionais para repetição
    while(alturaRestante > 0 && diasPercorridos < 8){

        // Recebe a altura escalada no dia
        alturaDia = Number(prompt("Altura do dia: "))

        // Subtrai a altura do dia da altura restante 
        alturaRestante -= alturaDia

        // Soma um dia decorrido
        diasPercorridos ++

    }

    // Verifica se atingiu 8 dias
    if(diasPercorridos == 8){

        // Mostra mensagem de alerta para voltar
        alert("Volte ou vai ficar sem oxigênio!")

    // Senão
    }else{

        // Mostra mensagem que atingiu o cume e os dias percorridos
        alert(`Você atingiu o cume em ${diasPercorridos} dias.`)

    }