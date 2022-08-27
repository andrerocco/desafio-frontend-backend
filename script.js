function calcularResultado(number) {
    let resultado = 0; 
    let divisoresAnterior = 0;

    for (let i = 1; i < number; i++) {
        let divisoresAtual = 0; // Torna 0 o número de divisores do número atual em instância, no caso, da variável i
    
        // Algorítmo que calcula o número de divisores de i de forma eficiente
        let limit = parseInt(Math.sqrt(i));
        for (let k = 1; k < limit+1; k++) {
            if (i % k == 0) { 
                divisoresAtual++;
                if (k != i/k) {
                    divisoresAtual++;
                }
            }
        };

        /* Se o número de divisores do valor atual de i for igual ao número de divisores do valor anterior de i,
        o valor de resultado será incrementado em 1 pois o número anterior é uma resposta correta */
        if (divisoresAtual == divisoresAnterior) {
            resultado++;
        };
    
        // Ao fim da instância, o número de divisores do valor atual de i é passado para divisoresAnterior
        divisoresAnterior = divisoresAtual;
    }

    return resultado // Retorna o resultado da operação
}

let form = document.getElementById("form");
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne que a página recarregue quando o usuário submeter sua resposta

    let number = document.getElementById("number").value; // Recebe o número digitado pelo usuário
    
    let inicio = performance.now(); // Armazena o instante de inicialização do loop para a solução do problema
    
    calcularResultado(number);

    let fim = performance.now(); // Armazena o instante final em que o loop terminou de ser executado
    let tempoDecorrido = fim - inicio // Calcula o tempo para a solução
})