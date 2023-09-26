# Desafio Full Stack

Esse projeto é a solução de André Amaral Rocco para o desafio de Desenvolvimento Web Full Stack proposta pelo [Laboratório Bridge](https://portal.bridge.ufsc.br). O desafio envolve a implementação de funcionalidades web tanto no frontend quantono backend.

Acesse a página desse repositório em: https://andrerocco.github.io/desafio-fullstack-divisores/

### O desafio proposto:
- Você deve criar uma Aplicação Web, que permita que o usuário insira um número inteiro k e calcule o número de inteiros positivos n menores que k, para os quais n e n + 1 têm o mesmo número de divisores positivos.
- Considere que o valor de n deve ser maior que 1.
- A aplicação deve possuir uma tela com um campo de texto que aceite apenas números inteiros e um botão.
- Ao clicar no botão, os dados devem ser enviados ao backend para cálculo e processamento.
- O resultado deve ser exibido na tela junto com o tempo levado para calcular o resultado.

### Exemplo de solução:
Os números 2 e 3 têm respectivamente 2 divisores positivos (1 e 2; 1 e 3), porém o número 4 possui 3 divisores positivos (1, 2 e 4). Logo, se o usuário entrar com o número 5, o resultado a ser exibido deve ser igual à 1, pois o único inteiro positivo menor que 5 que atende a condição deste desafio é o 2. A partir do número 5, apenas se usuário inserir o número 16 que o resultado passa a ser 2. Os número 14 e 15 tem a mesma quantidade de divisores e, dessa forma, o número 14 atende a condição para ser contado.

## Solução
O problema pode ser resolvido através de um algorítmo relativmente simples:
- O programa irá percorrer todos os números positivos e diferentes de zero menores que o número inserido pelo usuário.
- Para cada número percorrido, o programa irá descobrir seu número de divisores.
- Para descobrir o número de divisores do número em questão, o programa irá percorrer todos os inteiros positivos menores que o número que está sendo conferido e testar se os números são divisores ou não, armazenando o número de divisores em uma variável.

*JavaScript:*
```js
let resultado = 0; // Ao final do loop, irá armazenar o resultado
let divisoresAnterior = 0; // Armazena temporáriamente a quantidade de divisores do último número do loop

// A variável number é o número inserido pelo usuário
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
```

*Python:*
```py
resultado = 0  # Ao final do loop, irá armazenar o resultado
divisoresAnterior = 0 # Armazena temporáriamente a quantidade de divisores do último número do loop

# A variável number é o número inserido pelo usuário
for i in range(1, number):
    divisoresAtual = 0

    for k in range(i, 0, -1):
        if (i % k == 0): 
            divisoresAtual += 1

    if (divisoresAtual == divisoresAnterior):
        resultado += 1

    divisoresAnterior = divisoresAtual

print(resultado)
```

Entretando, é possível notar que esse algorítmo, apesar de simples, se torna cada vez mais custoso conforme o número inserido pelo usuário aumenta.

### A solução otimizada

É possível otimizar o algorítmo que contabiliza (descobrindo através da força bruta) a quantidade de números divisíveis do número *i* e, dessa forma, reduzir significantemente o tempo de execução do programa. 

Veja como o algorítmo irá descobrir quantos divisores um *i* número tem:
- Ao invés de percorrer todos os inteiros de 1 até *i*, o programa irá percorrer todos os inteiros de 1 até √*i*
- Se um inteiro de 1 até √*i* divide *i*, então o programa irá conferir se *i* dividido por esse inteiro é diferente de *i*. Caso se confirme, então *i* dividido pelo inteiro em questão também divide *i*.

Essa solução considera que os divisores de um número qualquer podem ser distribuídos em pares. Por exemplo, os divisores de 16 são 1, 2, 4, 8, 16. Os pares formados por números juntos aos seus divisores complementares seriam (1, 16), (2, 8) e (4, 4). Os pares que não tem números repetidos serão contados na mesma instância do *loop*. Já o único par que contém o número repetido (que é a mediana da lista de divisores de um número quando o número é um quadrado perfeito) será contado apenas uma vez.

Note que essa explicação não é uma prova matemática, mas sim uma exemplificação.

*JavaScript:*
```js
let resultado = 0; // Ao final do loop, irá armazenar o resultado
let divisoresAnterior = 0; // Armazena temporáriamente a quantidade de divisores do último número do loop

// A variável number é o número inserido pelo usuário
for (let i = 1; i < number; i++) {
    let divisoresAtual = 0;

    // Atualização do algorítmo
    let limit = parseInt(Math.sqrt(i));
    for (let k = 1; k < limit+1; k++) {
        if (i % k == 0) { 
            divisoresAtual++;
            if (k != i/k) {
                divisoresAtual++;
            }
        }
    };

    if (divisoresAtual == divisoresAnterior) {
        resultado++;
    };

    divisoresAnterior = divisoresAtual
};
```

*Python:*
```py
resultado = 0  # Ao final do loop, irá armazenar o resultado
divisoresAnterior = 0 # Armazena temporáriamente a quantidade de divisores do último número do loop

# A variável number é o número inserido pelo usuário
for i in range(1, number):
    divisoresAtual = 0

    limit = int(sqrt(i))
    for k in range(1, limit+1):
        if (i % k == 0): 
            divisoresAtual += 1
            if (k != i/k):
                divisoresAtual += 1

    if (divisoresAtual == divisoresAnterior):
        resultado += 1

    divisoresAnterior = divisoresAtual

print(resultado)
```

Fazendo alguns testes rapidos, é possível notar uma drástica diferença no tempo de execução dos dois algorítmos.


***Python* - Tempo de execução**

Número calculado: 5000 | Algorítmo sem otimização - **0,87** segundos | Algorítmo otimizado - **0,02** segundos <br>
Número calculado: 10000 | Algorítmo sem otimização - **3,45** segundos | Algorítmo otimizado - **0,06** segundos <br>
Número calculado: 25000 | Algorítmo sem otimização - **22,60** segundos | Algorítmo otimizado - **0,17** segundos <br>
Número calculado: 50000 | Algorítmo sem otimização - **102,96** segundos | Algorítmo otimizado - **0,51** segundos <br>

***JavaScript* - Tempo de execução**

Número calculado: 5000 | Algorítmo sem otimização - **0,04** segundos | Algorítmo otimizado - **0,004** segundos <br>
Número calculado: 10000 | Algorítmo sem otimização - **0,16** segundos | Algorítmo otimizado - **0,007** segundos <br>
Número calculado: 25000 | Algorítmo sem otimização - **0,95** segundos | Algorítmo otimizado - **0,013** segundos <br>
Número calculado: 50000 | Algorítmo sem otimização - **3,82** segundos | Algorítmo otimizado - **0,033** segundos <br>
