let number = 16;

let inicio = performance.now(); // Armazena o instante de inicialização do loop para a solução do problema

/* Algorítmo de solução */
let resultado = 0;
let divisoresAnterior = 0;
for (let i = 1; i < number; i++) {
    let divisoresAtual = 0;

    for (let k = i; k > 0; k--) {
        if (i % k == 0) { 
            divisoresAtual++;
        }
    };

    if (divisoresAtual == divisoresAnterior) {
        resultado++;
    };

    divisoresAnterior = divisoresAtual
};

console.log(resultado)

let fim = performance.now(); // Armazena o instante final em que o loop terminou de ser executado
let tempoDecorrido = fim - inicio // Calcula o tempo para a solução

console.log(tempoDecorrido)