function somatorio(num){
  total = 0;

  for (let index = num - 1; index > 0; index--) {
    if((index%3 == 0) || (index%5 == 0)) total += index;
  }

  return total;
};

const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

read.question('Digite um número inteiro positivo: ', (resposta) => {
  resultado = somatorio(resposta);

  console.log(`\nO somatório dos números divisiveis por 3 ou 5 e menores que ${resposta} é: ${resultado}`);


  read.close();
});

