# Desafio Full Stack

Esse projeto é a solução de André Amaral Rocco para o desafio de Desenvolvimento Web Full Stack da Bridge. O desafio envolve a implementação de funcionalidades web tanto no frontend quantono backend.

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
- Para descobrir o número de divisores do número em questão, o programa irá percorrer todos os números positivos menores que o número que está sendo conferido e testar se os números são divisores ou não, armazenando o número de divisores em uma variável.

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
