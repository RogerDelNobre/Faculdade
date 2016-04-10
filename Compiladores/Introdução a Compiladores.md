# Introdução a Compiladores
  Posto de forma somples, um compilador é um programa que lê um programa escrito em uma linguagem (fonte) e o traduz em um programa equivalente em uma outra linguagem (alvo). Como importante passo desse processo de tradução o compilador relata ao usuário a presença de erros no código fonte.
  ```
  (Programa Fonte)  ->  (Compilador)  ->  (Programa Alvo)
  LP's                    Erros           Lp's
    - Gerais                            - Máquina (OS)
    - Específicas                       - CPU
  ```
  Ao longo dos anos 50, os compiladores foram considerados programas difíceis de se escrever, desde então, descorre-se <u>técnicas</u> sistemáticas para o tratamento das tarefas que ocorrem durante a compilação.<br>
  O modelo de compilação é dividido em duas grandes fases. Análise e síntese, a parte de análise divide o programa fonte em partes constituíntes e cria uma <u>representação</u> intermediária do mesmo, a síntese constrói o programa alvo desejado a partir dessa representação.<br>

  Durante a análise, as operações de programa fonte são resgistradas em uma estrutura hierárquica (árvore). Na árvore sintática, cada nó representa uma operação e o(s) filho(s) representa(m) o(s) argumento(s). Ex:<br>
  ```
    montante := deposito + juros * 60

         :=
        /  \
  montante  +
           / \
    depósito  \
               *
              / \
          juros  60
  ```
Adicionalmente ao compilador, vários outros programas podem ser necessários para se criar um arquivo executável, um programa fonte pode ser dividido em vários módulos armazenados em arquivos separados, a tarefa de coletar esses dados é confiada ao pré-processador.
```
Arquivos e Headers  ->  (pré-processador) ->  Programa Fonte  ->  
(compilador)  ->  Programa Alvo não montado ->  (montador)  ->  
Código de máquina não alocado ->  (carregador(<- bibliotecas))
 ->  Código de máquina.
```
Na compilação a análise consiste em 3 fases:<br>
- Análise linear ou léxica, na qual um fluxo de caracteres constituindo um programa é lido e agrupado em tokens, sequencias de caracteres com significado coletivo.
- Análise hierárquica ou sintática, na qual os tokens são agrupados hierarquicamente em coleções aninhados comsignificados coletivos.
- Análise semântica, na qual essas verificações são realizadas a fim de se assegurar que os compiladores de um programa se continha de forma significativa. Ex:
```
  m : c + j * 60    ->  erro léxico.
  m := c + j *      ->  erro sintático.
  m := c + j * "A"  ->  erro semântico.
```
