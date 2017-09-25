# interpretador-AFN-
Trabalho LFA interpretador-AFNλ

## Intruções para execução

### Necessário instalação de:

 * NodeJS versão >= 7.6
 * NPM (geralmente vem com NodeJS)
 
### Executando:

Rode os comandos em ordem para executar o interpretador.
Primeiramente instale as depedências

````
  npm install 
````
````
  node src/index.js -f <arquivoAFN> -t <arquivoDeEntrada>
````

#### Opções disponiveis:

````
  --version   Exibe a versão                                           [boolean]
  -f, --file  Carrega arquivo                                      [obrigatório]
  -h, --help  Exibe ajuda                                              [boolean]
  -t, --test  Faz o Mesmo que < faz, use para teste                   [optativa]
````

A opção -t é para modificar o fluxo de entrada do progama. É similar com o < em shell. O redirecionamento de saída(>) funciona normalmente.

#### Exemplos:

````
  node src/index.js -f foo.json  -> envia arquivo foo.json como AFN
````

## Intruções para testes - Dev

Na pasta `test/` temos script `test.sh` que coleta todos arquivos `<algum_nome>.json` (AFN),  usa `<algum_nome>.json.input` como entrada e espera a saida `<algum_nome>.json.expect`. Basta executar o script `./test.sh` que irá gerar um log indicando se algum arquivo de test não foi satisfeito.

No nosso progama o comando `npm test` dado na raíz do projeto executa o arquiv `test/test.sh`, portanto para rodar testes é necessário somente esta na raiz e executar `npm test`.


## Autores
Pedro Henrique Lopes e Rogenes Reis
