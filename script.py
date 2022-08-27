import time
from math import sqrt

number = 6

inicio = time.time() # Armazena o instante de inicialização do loop para a solução do problema
inicioCPU = time.process_time()

# Algorítmo de solução
resultado = 0
divisoresAnterior = 0
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

fim = time.time() # Armazena o instante final em que o loop terminou de ser executado
fimCPU = time.process_time()
tempoDecorrido = float(fim - inicio) # Calcula o tempo para a solução
tempoDecorridoCPU = float(fimCPU - inicioCPU)

print('Tempo: ' + str(tempoDecorrido))
print('Tempo de CPU: ' + str(tempoDecorridoCPU))