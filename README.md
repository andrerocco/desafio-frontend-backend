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