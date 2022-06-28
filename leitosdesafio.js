/* Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas. Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) ou número de pessoas que saem (com números negativos). Caso a capacidade de de leitos livres seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres). */

// Cria variáveis e inicializa com valores 
let leitosDisponiveis = 40
let leitosSoma = 0
let leitosNum
let leitosExcedentes

    // Cria condicional para repetição
    while(leitosSoma <= leitosDisponiveis){

        // Recebe dados de entrada ou saída de hóspedes
        leitosNum = Number(prompt("Quantas pessoas? "))

        // Verifica se não está tentando abrir mais vagas do qeu existe
        if(leitosSoma + leitosNum < 0){

            // Mostra mensagem avisando
            alert("Nao pode liberar vaga!")
            
            // Zera os leitos da vez
            leitosNum = 0

        }

        // Atualiza a soma dos leitos ocupados
        leitosSoma += leitosNum
 
    }

    // Calcula os leitos excendentes
    leitosExcedentes = leitosSoma - leitosDisponiveis

// Mostra mensagem na tela com o número de leitos excedentes
alert(`Excede os leitos em ${leitosExcedentes}.`)

